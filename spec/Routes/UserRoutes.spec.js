const supertest = require('supertest')

describe("Testing The Endpoints of the Users Routes" , () => {
    const request = supertest(app)
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
    /** Alyaa **/
    describe("Testing The Profile Routes" , ()=>{
        /*
            A SHOW route: /users/:userID [GET]
            A Index route: /users [GET]
            A Update route : /users/:userID [PATCH]
            A Delete route : /users/:userID [DELETE]
        */

        it("expects the Index route to be successfull" , async () => {
            let res = await request.get("/users");
            expect( res.status ).toEqual(200)
            expect( Object.keys(res.body[0]) ).toEqual(jasmine.arrayContaining(test_obj))
        })

        it ("expects the Show Route to be successfull" , async () => {
            let rat = await request.get(`/users`);
            let res = await request.get(`/users/${rat.body[0]._id}`);
            expect( res.status ).toEqual(200)
            expect( Object.keys(res.body) ).toEqual(jasmine.arrayContaining(test_obj))
        })

        it ("expects a user to be updated successfull" , async () => {
            let rat = await request.get(`/users`);
            let res = await request.patch(`/users/${rat.body[0]._id}`).send({username:'Updated user'});
            expect( res.status ).toEqual(200)
            expect( Object.keys(res.body[0]) ).toEqual(jasmine.arrayContaining(test_obj))
        })

        it ("expects a user to be deleted successfull" , async () => {
            let rat = await request.post("/register").send(Register_payload)
            let res = await request.delete(`/users/${rat.body[0]._id}`);
            expect( res.status ).toEqual(200)
            expect( Object.keys(res.body) ).toEqual(jasmine.arrayContaining(test_obj))
        })
    })


    /** Mahmoud **/
    describe("Testing The User Subscriptions Routes" , ()=>{

        /*
            A Index route: /users/:userID/subs [GET] + query arguments for status
            A Show route: /users/:userID/subs/:id [GET]
            A Update route : /users/:userID/subs/:id [PATCH]
            A Create route : /users/:userID/subs [POST]
            An addMeal route: /users/:userID/subs/:subID/meals [POST]
            A Delete route : /users/:userID/subs/:id [DELETE]
        */
        
        const test_obj = ["UserID","Username","meals","Monthly_price","Dates","timeCreated","SubState"]
        let payload , userID;

        beforeAll( async () => {
            userID = (await request.get("/users")).body[0]
            payload = {
                UserID : userID._id,
                Username : userID.username,
                Monthly_price : 15.99,
                timeCreated: new Date(),
                SubState : 'pending'
            }
        } )

        it ("expects the Index Route to be successfull" , async () => {
            let res = await request.get(`/users/${userID}/subs`);
            expect( res.status ).toEqual(200)
            expect( Object.keys(res.body[0]) ).toEqual(jasmine.arrayContaining(test_obj))
        })

        it ("expects the Show Route to be successfull" , async () => {
            let rat = await request.get(`/users/${userID}/subs`);
            let res = await request.get(`/users/${userID}/subs/${rat.body[0]._id}`);
            expect( res.status ).toEqual(200)
            expect( Object.keys(res.body) ).toEqual(jasmine.arrayContaining(test_obj))
        })

        it ("expects a user subscriptions to be updated successfull" , async () => {
            let rat = await request.get(`/users/${userID}/subs`);
            let res = await request.patch(`/users/${userID}/subs/${rat.body[0]._id}`).send({SubState:'Updated'});
            expect( res.status ).toEqual(200)
            expect( Object.keys(res.body[0]) ).toEqual(jasmine.arrayContaining(test_obj))
        })

        it ("expects a user subscriptions to be Created successfull" , async () => {
            let res = await request.post(`/users/${userID}/subs`).send(payload);
            expect( res.status ).toEqual(200)
            expect( Object.keys(res.body[0]) ).toEqual(jasmine.arrayContaining(test_obj))
        })

        it ("expects a user subscriptions to be Deleted successfull" , async () => {
            let rat = await request.post(`/users/${userID}/subs`).send(payload);
            let test_api = await request.delete(`/users/${userID}/subs/${rat.body[0]._id}`);
            expect( test_api.status ).toEqual(200)
            expect( Object.keys(test_api.body) ).toEqual(jasmine.arrayContaining(test_obj))
        })



    })
})