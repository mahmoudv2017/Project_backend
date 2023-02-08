const supertest = require('supertest')
const app = require('../../server')

describe("Tests the Promotions Endpoints" , () => {

    const request = supertest(app)
    const test_obj = ["Sale_Percentage","DateStarted","DateExpired","old_price" , "meal_id" ,"restaurantID"]
    let payload;

    beforeAll( async () => {
        payload = {
            Sale_Percentage : '15%',
            DateStarted : new Date(),
            DateExpired : new Date("11-16-2097"),
            meal_id:'63e253ce76eaa2ba94d3f515',
            restaurantID:'63e09029b1c53f282f3e6daa',
            old_price : 2000
        }
    })
    
    it("expects the Index Route To be successfull" , async () => {
        let res = await request.get(`/promotions`);
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