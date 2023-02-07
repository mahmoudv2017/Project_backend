const supertest = require('supertest')
const app = require('../../server')

describe("Testing the Subscriptions Endpoints" , () => {
    const request = supertest(app)
    const test_obj = ["userID","username","meals","monthly_price","Dates","timeCreated","subState"]
    let payload;

    beforeAll( async () => {
        const userID = (await request.get("/users")).body[0]
        payload = {
            UserID : userID._id,
            Username : userID.username,
            Monthly_price : 15.99,
            timeCreated: new Date(),
            SubState : 'pending'
        }
    } )

    it("Expects the Index Route to be successfull" , async () => {
        let res = await request.get("/subs");

        expect( res.status ).toEqual(200)
        expect( Object.keys(res.body[0]) ).toEqual(jasmine.arrayContaining(test_obj))
    })

    it("expects the Show Route to be successfull" , async () => {
            
        let rat = await request.get('/subs')
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


    it("expects a subscription to be Deleted successfull" , async () => {
        let rat = await request.post("/subs").send(payload);

        let test_api = await request.delete(`/subs/${rat.body[0]._id}`);
        expect( test_api.status ).toEqual(200)
        expect( Object.keys(test_api.body) ).toEqual(jasmine.arrayContaining(test_obj))
    })
    
})