const mongoose = require('mongoose')
const Schema = mongoose.Schema
const types = Schema.Types

const RestModel = new Schema({
    title:String,
    image:String,
    speciality:String,
    rating:Number,
    branches: [{
        type:String
    }],
    description:String,
    social_media:Map,
    reviews  : [{
        type:types.ObjectId,
        ref:'reviews'
    }],
    meals : [ //for the ability to increase subs in the future
        {
            type:types.ObjectId,
            ref : 'meals'
        }
    ]
})

module.exports = mongoose.model("restaurants",RestModel)





/*

const RestModel = new Schema({
    firstName:String,
    lastName:String,
    password:String,
    email:String,
    address: {
        type:String,
        required: false
    },
    gender:{
        type : String,
        enum : ['Male' , 'Female']
    },
    type:{
        type:String,
        enum:['user','admin']
    },
    DOB : Date,
    subscriptions : [ //for the ability to increase subs in the future
        {
            type:types.ObjectId,
            ref : 'subscriptions'
        }
    ]
})
*/