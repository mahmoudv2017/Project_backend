const supertest = require('supertest')
const app = require('../../server')

describe("Tests the Promotions Endpoints" , () => {

    const request = supertest(app)
    const test_obj = ["Sale_Percentage","DateStarted","DateExpired","old_price"]
    let payload ,restID , MealID;

    beforeAll( async () => {
        restID = (await request.get("/restaurants")).body[0]._id;
        MealID = (await request.get(`/restaurants/${restID}/meals`)).body[0]._id ;
        payload = {
            Sale_Percentage : '15%',
            DateStarted : new Date(),
            DateExpired : new Date("11-16-2097"),
            old_price : 2000
        }
    })
    
    it("expects the Index Route To be successfull" , async () => {
        let res = await request.get(`/Promotions`);
        expect( res.status ).toEqual(200)
        expect( Object.keys(res.body[0]) ).toEqual(jasmine.arrayContaining(test_obj))
    })

    it("expects the Show Route To be successfull" , async () => {
        let rat = await request.get(`/promotions`);
        let res = await request.get(`/promotions/${rat.body[0]._id}`);
        expect( res.status ).toEqual(200)
        expect( Object.keys(res.body) ).toEqual(jasmine.arrayContaining(test_obj))
    })

    it("expects a Promotion to be created successfully" , async () => {
        let res = await request.post(`/promotions`).send(payload);
     
        expect( res.status ).toEqual(200)
        expect( Object.keys(res.body) ).toEqual(jasmine.arrayContaining(test_obj))
    })

    it("expects a Promotion to be Updated successfully" , async () => {
        let rat = await request.get(`/promotions`);
        let res = await request.patch(`/promotions/${rat.body[0]._id}`);
        expect( res.status ).toEqual(200)
        expect( Object.keys(res.body) ).toEqual(jasmine.arrayContaining(test_obj))
    })

    it("expects a Promotion to be Deleted successfully" , async () => {
        let rat = await request.post(`/promotions`).send(payload);
        let res = await request.delete(`/promotions/${rat.body._id}`);
        expect( res.status ).toEqual(200)
        expect( Object.keys(res.body) ).toEqual(jasmine.arrayContaining(test_obj))
    })

})