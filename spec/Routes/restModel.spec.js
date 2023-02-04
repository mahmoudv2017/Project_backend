const supertest = require('supertest')
const app = require('../../server')

describe("Endpoint testing" , () => {
    const request = supertest(app)
    it("expects the /restaurant get request to return with status 200" , async () => {
        expect( (await request.get("/restaurant")).status ).toBeTruthy()
    })
})