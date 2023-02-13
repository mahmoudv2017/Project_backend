const supertest = require("supertest");
const app = require("../../server");

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

    const test_obj = [
      "username",
      "firstName",
      "lastName",
      "gender",
      "type",
      "DOB",
      "password",
      "email",
    ];

    it("expects the Index route to be successfull", async () => {
      let res = await request.get("/users");
      expect(res.status).toEqual(200);
      expect(Object.keys(res.body[0])).toEqual(
        jasmine.arrayContaining(test_obj)
      );
    });

    it("expects the Show Route to be successfull", async () => {
      let rat = await request.get(`/users`);
      let res = await request.get(`/users/${rat.body[0]._id}`);
      expect(res.status).toEqual(200);
      expect(Object.keys(res.body)).toEqual(jasmine.arrayContaining(test_obj));
    });

    it("expects a user to be updated successfull", async () => {
      let rat = await request.get(`/users`);
      let res = await request
        .patch(`/users/${rat.body[0]._id}`)
        .send({ username: "Updated user" });
      expect(res.status).toEqual(200);
      expect(Object.keys(res.body)).toEqual(jasmine.arrayContaining(test_obj));
    });

    xit("expects a user to be deleted successfull", async () => {
      let rat = await request.post("/register").send(Register_payload);
      let res = await request.delete(`/users/${rat.body._id}`);
      expect(res.status).toEqual(200);
      expect(Object.keys(res.body)).toEqual(jasmine.arrayContaining(test_obj));
    });
  });

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

    const test_obj = [
      "userID",
      "username",
      "meals",
      "monthly_price",
      "Dates",
      "createdAt",
      "substate",
      "ExpirationDate",
    ];
    let payload, userID, user;

    beforeAll(async () => {
      user = (await request.get("/users")).body[0];
      userID = user._id;
      let nowDate = new Date();

      payload = {
        userID: userID,
        username: user.username,
        monthly_price: 15.99,
        Dates: [nowDate.getHours() + " : " + nowDate.getMinutes() + " AM"],
        ExpirationDate: new Date(),
        meals: [],
        substate: "pending",
      };
    });

    it("expects the Index Route to be successfull", async () => {
      let res = await request.get(`/users/${userID}/subs`);
      expect(res.status).toEqual(200);
      expect(Object.keys(res.body[0])).toEqual(
        jasmine.arrayContaining(test_obj)
      );
    });

    it("expects the Show Route to be successfull", async () => {
      let rat = await request.get(`/users/${userID}/subs`);
      let res = await request.get(`/users/${userID}/subs/${rat.body[0]._id}`);
      expect(res.status).toEqual(200);
      expect(Object.keys(res.body)).toEqual(jasmine.arrayContaining(test_obj));
    });

    it("expects a user subscriptions to be updated successfull", async () => {
      let rat = await request.get(`/users/${userID}/subs`);
      let res = await request
        .patch(`/users/${userID}/subs/${rat.body[0]._id}`)
        .send({ subState: "active" });
      expect(res.status).toEqual(200);
      expect(Object.keys(res.body)).toEqual(jasmine.arrayContaining(test_obj));
    });

    it("expects a meal to be added to the subscription", async () => {
      let rat = await request.get(`/users/${userID}/subs`);
      let newMeal = "63e253ce76eaa2ba94d3f515";
      let res = await request.post(
        `/users/${userID}/subs/${rat.body[0]._id}/meals/${newMeal}`
      );
      expect(res.status).toEqual(200);
      expect(Object.keys(res.body)).toEqual(jasmine.arrayContaining(test_obj));
    });

    it("expects a user subscriptions to be Created successfull", async () => {
      let res = await request.post(`/users/${userID}/subs`).send(payload);
      expect(res.status).toEqual(200);
      expect(Object.keys(res.body)).toEqual(jasmine.arrayContaining(test_obj));
    });

    it("expects a user subscriptions to be Deleted successfull", async () => {
      let rat = await request.post(`/users/${userID}/subs`).send(payload);
      let test_api = await request.delete(
        `/users/${userID}/subs/${rat.body._id}`
      );
      expect(test_api.status).toEqual(200);
      expect(Object.keys(test_api.body)).toEqual(
        jasmine.arrayContaining(test_obj)
      );
    });
  });
});
