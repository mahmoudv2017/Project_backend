const express = require('express')
const app = express()
const colors = require('colors')
const cors = require('cors')

const RestaurantsRoutes = require('./Models/Restaurants/rest')
const database = require('./database')

require('dotenv').config()
const {PORT} = process.env

app.use(express.json())
app.use(cors())
app.use( express.static("views"))




app.listen(PORT || 4000 , async () => {
   
    try {
        
        console.log( colors.bold.cyan(`Served Hosted at http://localhost:${PORT}`) )
        // await database() //connect only in models
        // console.log(colors.green("Connected to DB"))
    } catch (error) {
        console.log(colors.red("Failure to connect to DB"))
    }

})



app.use("/restaurants" ,RestaurantsRoutes )

module.exports = app
