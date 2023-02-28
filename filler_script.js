/// code for filling the DB

const database = require("./database");
const { faker } = require("@faker-js/faker");
const colors = require("colors");
const {default:slugify} = require("slugify")
const Models = require("./Models");
const { Types } = require("mongoose");

let [, , type, count] = process.argv;
console.log(type, count);
count = count || 5;

const fillUsers = async (count) => {
  try {
    await database.Connect();
    let payload = [];
    let nowDate = new Date();
    console.log(
      `${nowDate.getDate()}-${nowDate.getMonth() + 1}-${nowDate.getFullYear()}`
    );
    for (let index = 0; index < count; index++) {
      payload.push({
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        username: faker.internet.userName(),
        password: "1235",
        email: faker.internet.email(),
        address: [`${faker.address.city()} ${faker.address.state()}`],
        gender: "male",
        DOB: new Date(),
        type: "user",
        subscriptions: [],
      });
    }

    return await Models.usersModel.insertMany(payload);
  } catch (error) {
    throw new Error(error);
  }
};

const fillSubs = async (count) => {
  // await database.Connect();
  // await Models.subModel.deleteMany({});
  // return
  try {
    await database.Connect();
    let userID = (await Models.usersModel.find())[0];
    let restaurant = (await Models.RestaurantModel.find())[4];
    let payload = [];
    let nowDate = new Date();
    for (let index = 0; index < count; index++) {
      payload.push({
        userID: userID._id,
        username: userID.username,
        restaurantID:restaurant._id,
        restaurantImg:restaurant.image,
        restaurantName:restaurant.title,
        meals: [],
        monthly_price: 19.99,
        Dates: [nowDate.getHours() + " : " + nowDate.getMinutes() + " AM"],
        ExpirationDate: new Date(),
        substate: "expired",
      });
    }

    await Models.subModel.insertMany(payload);
  } catch (error) {
    throw new Error(error);
  }
};

const fillRestaurants = async (count) => {
  
  try {
    await database.Connect();
    //await Models.RestaurantModel.deleteMany({})
    //return
   
    let payload = [];
    for (let index = 0; index < count; index++) {
      let random_name = faker.animal.lion()
      payload.push({
        title: random_name,
        slug:slugify(random_name),
        image: faker.image.imageUrl(),
        speciality: faker.lorem.words(4),
        rating: (Math.random() * 5).toFixed(2) + 1,
        branches: [faker.address.cityName() + faker.address.streetAddress()],
        description: faker.lorem.lines(2),
        meals: [],
        social_media: {
          facebook: "https://www.facebook.com/",
          twitter: "https://twitter.com/home",
        },
      });
    }

    return await Models.RestaurantModel.insertMany(payload);
  } catch (error) {
    throw new Error(error);
  }
};

const fillMeals = async (count) => {
  // uncomment if you want to empty the collection

  try {
     await database.Connect();
   //   await Models.MealModel.deleteMany({})
     // return
    const restID = (await Models.RestaurantModel.find())[0]._id;
    //console.log(restID)
    let payload = [];
    for (let index = 0; index < count; index++) {
      payload.push({
        title: faker.finance.accountName(),
        description: faker.lorem.lines(2),
        price: (Math.random() * 200).toFixed(2),
        image: faker.image.imageUrl(),
        hasChoices: false,
        restaurantID: restID,
        SectionName: "dinner",
        sectionId: "63e32f17c71619653dc2ccde",
      });
    }

    return await Models.MealModel.insertMany(payload);
  } catch (error) {
    throw new Error(error);
  }
};
const fillReview = async (count) => {
  try {
    await database.Connect();
    // await Models.ReviewModel.deleteMany()
    // return;
    const restID = (await Models.RestaurantModel.find())[0]._id;
    const userID = (await Models.usersModel.find())[0];
    let payload = [];
    for (let index = 0; index < count; index++) {
      payload.push({
        userID: userID._id,
        username: userID.username,
        comment: faker.lorem.lines(1),
        impression:'good',
        restaurantId: restID,
      });
    }

    return await Models.ReviewModel.insertMany(payload);
  } catch (error) {
    throw new Error(error);
  }
};
const fillPromotion = async (count) => {
  try {
    await database.Connect();
    const restID = (await Models.RestaurantModel.find())[0]._id;
    //const mealID = (await Models.MealModel.find())[0]._id;
    console.log(mealID);
    let payload = [];
    for (let index = 0; index < count; index++) {
      payload.push({
        sales_percentage: "20%",
        // mealId: mealID,
        DateExpired: new Date(),
        restaurantId: restID,
        old_price: 50.5,
      });
    }

    return await Models.PromoModel.insertMany(payload);
  } catch (error) {
    throw new Error(error);
  }
};




switch (type) {
  case "restaurants":
    fillRestaurants(count).then(() => {
      console.log(colors.bold.magenta("Data Added Successfully"));
      process.exit(0);
    });

    break;

  case "users":
    fillUsers(count).then(() => {
      console.log(colors.bold.magenta("Data Added Successfully"));
      process.exit(0);
    });

    break;
  case "subs":
    fillSubs(count).then(() => {
      console.log(colors.bold.magenta("Data Added Successfully"));
      process.exit(0);
    });

    break;

  case "meals":
    fillMeals(count).then(() => {
      console.log(colors.bold.magenta("Data Added Successfully"));
      process.exit(0);
    });

    break;

  case "review":
    fillReview(count).then(() => {
      console.log(colors.bold.magenta("Data Added Successfully"));
      process.exit(0);
    });

    break;
  case "promotion":
    fillPromotion(count).then(() => {
      console.log(colors.bold.magenta("Data Added Successfully"));
      process.exit(0);
    });

    break;
  default:
    console.log("You Entered the wrong type");
    return;
}
