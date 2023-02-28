const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SubSchema = new Schema({
    userID : {
        type :mongoose.Types.ObjectId,
        ref:'users'
    },
    restaurantID:{type:mongoose.Types.ObjectId , ref:'restaurants'},
    restaurantName :String,
    restaurantImg :String,
    username : String,
    meals : [
        {
            type:mongoose.Types.ObjectId,
            ref:'meals'
        }
    ],
    monthly_price : Number,
    Dates : {
        type:[String]
    },
    ExpirationDate : Date,
    substate : {
        type:String,
        enum :['pending' , 'active' , 'expired']

    }
} , {timestamps:true})

module.exports = mongoose.model('subscriptions',SubSchema)