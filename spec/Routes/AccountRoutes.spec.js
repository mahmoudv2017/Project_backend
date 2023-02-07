const supertest = require("supertest")
const app = require("../../server")

describe("Tests the Accounts Endpoints" , () => {
    const request = supertest(app)

    const Login_payload = {
        username : 'mahmoudv2023',
        password:'1235'
    }

    const Register_payload = {
        username : 'mahmoudv2023',
        firstName:'ay7aga',
        lastName : 'tester',
        gender : 'Male',
        type :'user',
        DOB:new Date('11-16-1997'),
        password:'test1235',
        email:'mahmmoudv2012@gmail.com',
        address :['optional']

    }

    it("expects the Login Route to return valid JSON" , async () => {
        let res = await request.post("/login").send(payload)
        expect( res.status ).toEqual(200)
        expect( Object.keys(res.body) ).toEqual(jasmine.arrayContaining(Login_payload))
    })

    it("expects the user to be created" , async () => {
        let res = await request.post("/register").send(Register_payload)
        expect( res.status ).toEqual(200)
        // expect( Object.keys(res.body) ).toEqual(jasmine.arrayContaining(token))
    })
})