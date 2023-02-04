const express = require('express')
const app = express()
const colors = require('colors')
const database = require('./database')
const cors = require('cors')

const Routes = require('./Routes')


require('dotenv').config()
const {PORT} = process.env

app.use(express.json())
app.use(cors())
app.use( express.static("views"))

//error handling



app.listen(PORT || 4000 , async () => {
   

    await database()
    console.log( colors.bold.cyan(`Served Hosted at http://localhost:${PORT}`) )
   

})



app.use("/restaurants" ,Routes.restRotues )
//user routes
//meals restaurants
//others

module.exports = app
