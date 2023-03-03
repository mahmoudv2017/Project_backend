const {createApi} = require('unsplash-js')
const database = require('./database')
const Models = require('./Models')

require('dotenv').config()

const unsplash = createApi({
    accessKey:process.env.UNSplashAccessKey
})


const asyncFunkoosh = async () => {
  await database.Connect()
  const photos = await unsplash.search.getPhotos({ query: 'Restaurants Logos'  , page:1 , perPage:28})
  console.log(photos.response.results.length)
  const IDS = await Models.RestaurantModel.find({})
  //console.log(IDS)
    for (let index = 0 , y=0; index < IDS.length ; index++ , y++) {

    await  Models.RestaurantModel.findByIdAndUpdate(IDS[index]._id , {image:photos.response.results[y].urls.regular})
      
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