/// code for filling the DB 

const database = require('./database')
const {faker} =  require('@faker-js/faker');
const colors = require('colors')
const restModel = require('./Models/Restaurants/RestModel')

let [,, type, count] = process.argv 
console.log(type , count)
count = count || 5

const fillRestaurants = async (count) => {
try {
    await database();
    let payload = []
    for (let index = 0; index < count; index++) {
        payload.push(
            {
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
        )
    }

    return await restModel.insertMany(payload)

} catch (error) {
    console.log(error)
}

}


switch(type){
    case 'restaurants':
        fillRestaurants(count).then(() => {
            console.log(colors.bold.magenta("Data Added Successfully"))
            process.exit(0);
        })
        
        break;
    default:
        console.log("You Entered the wrong type")
        return;
}

