const express = require('express')
const app = express()
const colors = require('colors')
const cors = require('cors')

const RestaurantsRoutes = require('./Models/Restaurants/rest')

require('dotenv').config()

app.use(express.json())
app.use(cors())


app.listen(process.env.PORT || 4000 , () => {
    console.log( colors.bold.cyan(`Served Hosted at http://localhost:${process.env.PORT}`) )
})

app.get('/' , (req,res) => {
    res.send("<h1>Hello Server</h1>")
})

app.use("/restaurants" ,RestaurantsRoutes )

module.exports = app
