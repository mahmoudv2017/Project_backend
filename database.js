const mongoose = require("mongoose")
mongoose.set('strictQuery', false);
const colors = require('colors')
require('dotenv').config()
const { USER_NAME , PASSWORD , Database_Name} = process.env



module.exports = async () => {
  
 return await mongoose.connect(`mongodb+srv://${USER_NAME}:${PASSWORD}@firstcluster.oz3c4.mongodb.net/${Database_Name}`)
    
}