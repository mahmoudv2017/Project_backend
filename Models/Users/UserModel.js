const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    firstName : String,
    lastName : String,
    username : String,
    password : String,
    email : String,
    address : {
        type:[String]
    },
    gender : {
        type:String,
        enum : ['male' , 'female']
    },
    DOB: Date,
    type : {
        type:String,
        enum:['user' , 'admin']
    },
    subscriptions : [
        {
            type:mongoose.Types.ObjectId,
            ref:'subscriptions'
        }
    ]
})

module.exports = mongoose.model('users',UserSchema)