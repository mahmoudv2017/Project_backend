const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const MealSchema = new Schema({
    title:String,
    description:String,
    price:Number,
    image:String,
    hasChoices:Boolean,
    restaurantID:{
        type:mongoose.Types.ObjectId,
        ref:'restaurants'
    },
    sectionName:String,
    sectionID:{
        type:mongoose.Types.ObjectId,
        ref:'sections'
    }
})

module.exports = mongoose.model('meals',MealSchema)