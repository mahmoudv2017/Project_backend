const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SubSchema = new Schema({
    userID : {
        type :mongoose.Types.ObjectId,
        ref:'users'
    },
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
    timeCreated: Date,
    ExpirationDate : Date,
    substate : {
        type:String,
        enum :['pending' , 'active' , 'expired']

    }
})

module.exports = mongoose.model('subscriptions',SubSchema)