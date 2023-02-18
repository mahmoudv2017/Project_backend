const {createApi} = require('unsplash-js')
const database = require('./database')
const Models = require('./Models')

require('dotenv').config()

const unsplash = createApi({
    accessKey:process.env.UNSplashAccessKey
})
const controller = new AbortController();
const signal = controller.signal;

const asyncFunkoosh = async () => {
  await database.Connect()
  const photos = await unsplash.search.getPhotos({ query: 'restaurant logo'  , page:1 , perPage:11})
  const IDS = await Models.MealModel.find({})

    for (let index = 0; index < 10; index++) {

    await  Models.MealModel.findByIdAndUpdate(IDS[index]._id , {image:photos.response.results[index].urls.thumb})
      
    }
}

asyncFunkoosh().then(()=>{console.log("done")

process.exit(0)
})

// unsplash.search.getPhotos({ query: 'food' , page:1 , perPage:20}).then(result => {
//     if (result.errors) {
//       // handle error here
//       console.log('error occurred: ', result.errors[0]);
//     } else {
//       // handle success here
//       const photo = result.response;
//       console.log(photo.results[0].urls);
//     }
//   });