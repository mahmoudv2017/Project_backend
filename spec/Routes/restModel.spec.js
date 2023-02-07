const supertest = require('supertest')
const app = require('../../server')
const {faker} = require('@faker-js/faker')



describe("Endpoint Testing For all Restaurant Related Routes" , () => {
    const request = supertest(app)

    /**** Mahmoud Tests ***/ 

    describe("Endpoint testing for the restaurant routes" , () => {
       
        let test_obj = ["title","description","image","rating"]
        let payload =  {
            title: faker.animal.lion() ,
            image:faker.image.avatar(),
            speciality: faker.lorem.words(4) ,
            rating: (Math.random() * 5 ).toFixed(2) +1,
            branches: [faker.address.cityName() + faker.address.streetAddress()],
            description:faker.lorem.lines(2),
            social_media:{
                facebook : 'https://www.facebook.com/',
                twitter : 'https://twitter.com/home'
            }
        } 
        it("expects the restaurants Index Route to be successfull" , async () => {
            let res = await request.get("/restaurants");
            expect( res.status ).toEqual(200)
            expect( Object.keys(res.body[0]) ).toEqual(jasmine.arrayContaining(test_obj))
        })
    
        it("expects the restaurant Show Route to be successfull" , async () => {
            
            let rat = await request.get('/restaurants')
            let res = await request.get(`/restaurants/${rat.body[0]._id}`);
            expect( res.status ).toEqual(200)
            expect( Object.keys(res.body) ).toEqual(jasmine.arrayContaining(test_obj))
        })
    
        it("expects the restaurant to be created successfull" , async () => {
            
            let res = await request.post("/restaurants").send(payload);
            expect( res.status ).toEqual(200)
            expect( Object.keys(res.body) ).toEqual(jasmine.arrayContaining(test_obj))
        })
    
        it("expects a restaurant to be Deleted successfull" , async () => {
            let rat = await request.post("/restaurants").send(payload);
    
            let test_api = await request.delete(`/restaurants/${rat.body._id}`);
            expect( test_api.status ).toEqual(200)
            expect( Object.keys(test_api.body) ).toEqual(jasmine.arrayContaining(test_obj))
        })
    
        it("expects a restaurant to be Updated successfull" , async () => {
            let rat = await request.get('/restaurants') //what is the test object ?
            let test_api = await request.patch(`/restaurants/${rat.body[0]._id}`).send({title:"Updated Title"});
            
            expect( test_api.status ).toEqual(200)
            expect( Object.keys(test_api.body) ).toEqual(jasmine.arrayContaining(test_obj))
        })
    })



    /**** Mina Tests ***/ 

    describe("Endpoint testing for the Meals routes" , () => {
        const request = supertest(app)
        let testID 
        beforeAll( async () => {
            testID = (await request.get("/restaurants")).body[0]._id;
        })

    
    
        let test_obj = ["title","description","image" , "price" , "hasChoices" , "sectionName"]
        let payload =  {
            title: faker.animal.lion() ,
            image:faker.image.avatar(),
            description: faker.lorem.lines(4) ,
            price:Math.round(Math.random()*200),
            hasChoices : false,
            restaurantID : testID,
            sectionName : 'BreakFast',
            sectionID : "nothing"
        } 
    
    
        it("expects the Meals Index Route to be successfull" , async () => {
            let res = await request.get(`/restaurants/${testID}/meals`);
            expect( res.status ).toEqual(200)
            expect( Object.keys(res.body[0]) ).toEqual(jasmine.arrayContaining(test_obj))
        })
    
        it("expects the Meals Show Route to be successfull" , async () => {
            
            let rat = await request.get(`/restaurants/${testID}/meals`);
            let res = await request.get(`/restaurants/${testID}/meals/${rat.body[0]._id}`);
            expect( res.status ).toEqual(200)
            expect( Object.keys(res.body) ).toEqual(jasmine.arrayContaining(test_obj))
        })
    
        it("expects the Meals to be created successfull" , async () => {
            
            let res = await request.post(`/restaurants/${testID}/meals/`).send(payload);
            expect( res.status ).toEqual(200)
            expect( Object.keys(res.body) ).toEqual(jasmine.arrayContaining(test_obj))
        })
    
        it("expects a Meal to be Deleted successfull" , async () => {
            let rat = await request.post(`/restaurants/${testID}/meals/`).send(payload);
    
            let test_api = await request.delete(`/restaurants/${testID}/meals/${rat.body._id}`);
            expect( test_api.status ).toEqual(200)
            expect( Object.keys(test_api.body) ).toEqual(jasmine.arrayContaining(test_obj))
        })
    
        it("expects a meal to be Updated successfull" , async () => {
            let rat = await request.get(`/restaurants/${testID}/meals`);
            let test_api = await request.patch(`/restaurants/${testID}/meals/${rat.body[0]._id}`).send({title:"Updated Title"});
            
            expect( test_api.status ).toEqual(200)
            expect( Object.keys(test_api.body) ).toEqual(jasmine.arrayContaining(test_obj))
        })
    })


    /**** Alyaa Tests ***/ 

    describe("Endpoint testing for the Reviews routes" , () => {
        const request = supertest(app)
        let testID ,userID
        beforeAll( async () => {
            testID = (await request.get("/restaurants")).body[0]._id;
            userID = (await request.get("/users"))
        })

    
    
        let test_obj = ["username","comment","timeCreated"] //???
        let payload =  {
            username: faker.animal.lion() ,
            comment:faker.image.avatar(),
            timeCreated: new Date() ,
            userID: userID,
            impression :'Not Good'
        } 
    
    
        it("expects the Reviews Index Route to be successfull" , async () => {
            let res = await request.get(`/restaurants/${testID}/reviews`);
            expect( res.status ).toEqual(200)
            expect( Object.keys(res.body[0]) ).toEqual(jasmine.arrayContaining(test_obj))
        })
    
    
        it("expects the Reviews to be created successfull" , async () => {  
            
            let res = await request.post(`/restaurants/${testID}/users/${userID}/reviews`).send(payload);
            expect( res.status ).toEqual(200)
            expect( Object.keys(res.body) ).toEqual(jasmine.arrayContaining(test_obj))
        })
    
        it("expects a Review to be Deleted successfull" , async () => {
            let rat = await request.post(`/restaurants/${testID}/users/${userID}/reviews`).send(payload);
    
            let test_api = await request.delete(`/restaurants/${testID}/users/${userID}/reviews/${rat.body._id}`);
            expect( test_api.status ).toEqual(200)
            expect( Object.keys(test_api.body) ).toEqual(jasmine.arrayContaining(test_obj))
        })
    
        it("expects a Review to be Updated successfull" , async () => {
            let rat = await request.get(`/restaurants/${testID}/users/${userID}/reviews`);
            let test_api = await request.patch(`/restaurants/${testID}/users/${userID}/reviews/${rat.body[0]._id}`).send({title:"Updated Title"});
            
            expect( test_api.status ).toEqual(200)
            expect( Object.keys(test_api.body) ).toEqual(jasmine.arrayContaining(test_obj))
        })
    })
})







