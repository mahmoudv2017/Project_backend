const supertest = require("supertest")
const app = require("../../server")
const faker = require('@faker-js/faker')

describe("Tests the Accounts Endpoints" , () => {
    const request = supertest(app)

    const Login_payload = {
        username : 'mahmoudv2026',
        password:'vcut123'
    }

    const Register_payload = {
        username : faker.faker.internet.userName,
        firstName:'ay7aga',
        lastName : 'tester',
        gender : 'male',
        type :'user',
        DOB:new Date('11-16-1997'),
        password:'test1235',
        email:'mahmmoudv2012@gmail.com',
        address :['optional']

    }

    it("expects the Login Route to return valid JSON" , async () => {
        let res = await request.post("/account/login").send(Login_payload)
        expect( res.status ).toEqual(200)
        
        expect( Object.keys(res.body) ).toEqual(jasmine.arrayContaining(["Token-is"]))
    })

    it("expects the user to be created" , async () => {
        let res = await request.post("/account/register").send(Register_payload)
        expect( res.status ).toEqual(200)
   
    })
})