const express = require('express')
const app = express()
const colors = require('colors')
const cors = require('cors')

const RestaurantsRoutes = require('./Models/Restaurants/rest')

require('dotenv').config()

app.use(express.json())
app.use(cors())
app.use(express.static("views"))


app.listen(process.env.PORT || 4000 , () => {
    console.log( colors.bold.cyan(`Served Hosted at http://localhost:${process.env.PORT}`) )
})

app.get('/' , (req,res) => {
    res.render("index.html")
})

app.use("/restaurants" ,RestaurantsRoutes )

module.exports = app
