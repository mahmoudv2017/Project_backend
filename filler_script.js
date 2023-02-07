/// code for filling the DB 

const database = require('./database')
const {faker} =  require('@faker-js/faker');
const colors = require('colors')
const restModel = require('./Models/Restaurants/RestModel')
const UserModel = require('./Models/Users/UserModel')
const SubModel = require('./Models/Subs/SubModel')
const MealModel = require('./Models/Restaurants/MealsModel')

let [,, type, count] = process.argv 
console.log(type , count)
count = count || 5;

const fillUsers = async (count) => {
    try {
        await database.Connect();
        let payload = []
        let nowDate = new Date();
        console.log(`${nowDate.getDate()}-${nowDate.getMonth()+1}-${nowDate.getFullYear()}`)
        for (let index = 0; index < count; index++) {
            payload.push(
                {
                    firstName : faker.name.firstName(),
                    lastName : faker.name.lastName(),
                    username : faker.internet.userName(),
                    password : "1235",
                    email : faker.internet.email(),
                    address : [`${faker.address.city()} ${faker.address.state()}`],
                    gender : 'male',
                    DOB: new Date(),
                    type : 'user',
                    subscriptions : []
                }
            )
        }

        return await UserModel.insertMany(payload)

    } catch (error) {
        throw new Error(error)
    }

}

const fillSubs = async (count) => {
    // await database();
    // await SubModel.deleteMany({});
    // return
    try {
      
        await database();
        let userID = (await UserModel.find())[0]

        let payload = []
        let nowDate = new Date()
        for (let index = 0; index < count; index++) {
            payload.push(
                {
                    userID : userID._id,
                    username : userID.username,
                    meals : [],
                    monthly_price : 19.99,
                    Dates : [nowDate.getHours() +" : "+ nowDate.getMinutes() + " AM"],
                    timeCreated: new Date(),
                    ExpirationDate : new Date(),
                    substate : 'pending'
                }
            )
        }

        await SubModel.insertMany(payload)
        

    } catch (error) {
       throw new Error(error)
    }

}

const fillRestaurants = async (count) => {
    try {
        await database.Connect();
        let payload = []
        for (let index = 0; index < count; index++) {
            payload.push(
                {
                    title: faker.animal.lion() ,
                    image:	faker.image.url(),
                    speciality: faker.lorem.words(4) ,
                    rating: (Math.random() * 5 ).toFixed(2) +1,
                    branches: [faker.address.cityName() + faker.address.streetAddress()],
                    description:faker.lorem.lines(2),
                    social_media:{
                        facebook : 'https://www.facebook.com/',
                        twitter : 'https://twitter.com/home'
                    }
                }
            )
        }

        return await restModel.insertMany(payload)

    } catch (error) {
        throw new Error(error)
    }

}

const fillMeals = async (count) => {
 
    try {
        await database.Connect();
        const restID = (await restModel.find())[0]._id
        let payload = []
        for (let index = 0; index < count; index++) {
            payload.push(
                {
                    title:faker.finance.accountName(),
                    description:faker.lorem.lines(2),
                    price:  Math.round(Math.random()*200).toFixed(1) ,
                    image:faker.image.imageUrl(),
                    hasChoices:false,
                    restaurantID:restID,
                    sectionName:"breakfast",
                    sectionID:'63e242951baea9c9e47ec76f'
                }
            )
        }

        return await MealModel.insertMany(payload)

    } catch (error) {
        throw new Error(error)
    }

}

switch(type){
    case 'restaurants':
        fillRestaurants(count).then(() => {
            console.log(colors.bold.magenta("Data Added Successfully"))
            process.exit(0);
        })
        
        break;

    case 'users':
        fillUsers(count).then(() => {
            console.log(colors.bold.magenta("Data Added Successfully"))
            process.exit(0);
        })
        
        break;
    case 'subs':
        fillSubs(count).then(() => {
            console.log(colors.bold.magenta("Data Added Successfully"))
            process.exit(0);
        })
        
        break;

    case 'meals':
        fillMeals(count).then(() => {
            console.log(colors.bold.magenta("Data Added Successfully"))
            process.exit(0);
        })
        
        break;
    default:
        console.log("You Entered the wrong type")
        return;
}

