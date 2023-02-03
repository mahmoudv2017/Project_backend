
const supertest = require('supertest')
const app = require('../../server')

describe("models testing" , () => {
   const request = supertest(app)
    it("a5er ma7wla" , async () => {
        expect( (await request.get('/restaurants')).status ).toEqual(200)
    })
})