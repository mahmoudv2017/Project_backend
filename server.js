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
    try {
        await database()
        console.log(colors.bold.green("Database Connected"))
    } catch (error) {
        console.log(error)
        console.log(colors.bold.red("Couldn't Connect to DB"))
    }
    
    console.log( colors.bold.cyan(`Served Hosted at http://localhost:${PORT}`) )
})


/**************************** Main Features *****************************/



/******************** Routes ********************/

        /* Mina */              /* Mahmoud */             /* Alyaa */
/****  meals route (5)  +    restaurants Route (5) +    Reviews Route (3)  ******/
app.use("/restaurants" ,Routes.RestRotues )

            /* Mona */ 
/****  Subs Routes for admin (4)  ******/ 
app.use("/subs" ,Routes.SubRoutes )

            /* Mona */ 
/****  Promotions Route (4)  ******/
app.use("/promotions" ,Routes.PromoRoutes )

            /* Alyaa */             /* Mahmoud */
/******  Profile Routes (4) + User Subscriptions Routes (6)  ******/
app.use("/users" ,Routes.UserRoutes )

            /* Mina */ 
/****** Account Routes (2)   *********/
app.use("/account" , Routes.AccountRoutes)





/********** MiddleWare **********/

// Creating Images Upload Middleware using multer -------- Mahmoud
// Creating Authentication with JWT middleware -------- ??



/*
        Secondary Feature
app.use("/sections" ,Routes.restRotues )
*/

module.exports = app
