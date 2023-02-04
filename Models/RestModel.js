const mongoose = require('mongoose')
const Schema = mongoose.Schema
const types = Schema.Types

const RestModel = new Schema({
    name:types.String,
    email:types.String,
    phone:types.Number
})

module.exports = mongoose.model("clients",RestModel)