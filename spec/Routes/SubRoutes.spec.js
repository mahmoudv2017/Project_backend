const supertest = require('supertest')
const app = require('../../server')

describe("Testing the Subscriptions Endpoints" , () => {
    const request = supertest(app)
    const test_obj = ["userID","username","meals","monthly_price","Dates","createdAt","substate"]
    let payload;

    beforeAll( async () => {
        const userID = (await request.get("/users")).body[0]
        payload = {
            userID : userID._id,
            username : userID.username,
            monthly_price : 15.99,
            ExpirationDate:new Date('16-11-2025'),
            Dates : [ (new Date()).getHours()+ (new Date()).getMinutes()],
            substate : 'pending',
            meals : ['63e253ce76eaa2ba94d3f515']
        }
    } )

    it("Expects the Index Route to be successfull" , async () => {
        let res = await request.get("/subs");

        expect( res.status ).toEqual(200)
        expect( Object.keys(res.body[0]) ).toEqual(jasmine.arrayContaining(test_obj))
    })

    it("expects the Show Route to be successfull" , async () => {
            
        let rat = await request.get(`/subs`)
        let res = await request.get(`/subs/${rat.body[0]._id}`);
        expect( res.status ).toEqual(200)
        expect( Object.keys(res.body) ).toEqual(jasmine.arrayContaining(test_obj))
    })


    it("expects a subscription to be Updated successfull" , async () => {
        let rat = await request.get('/subs') //what is the test object ?
        let test_api = await request.patch(`/subs/${rat.body[0]._id}`).send({title:"Updated Title"});
        
        expect( test_api.status ).toEqual(200)
        expect( Object.keys(test_api.body) ).toEqual(jasmine.arrayContaining(test_obj))
    })
    it("expects a subscription to be Created successfull" , async () => {
        let rat = await request.post("/subs").send(payload);
        expect( rat.status ).toEqual(200)
        expect( Object.keys(rat.body) ).toEqual(jasmine.arrayContaining(test_obj))
    })


    it("expects a subscription to be Deleted successfull" , async () => {
        let rat = await request.post("/subs").send(payload);

        let test_api = await request.delete(`/subs/${rat.body._id}`);
        expect( test_api.status ).toEqual(200)
        expect( Object.keys(test_api.body) ).toEqual(jasmine.arrayContaining(test_obj))
    })
    
})