<<<<<<< HEAD
const express = require('express')
const app = express()
const colors = require('colors')
const database = require('./database')
const path = require('path')
const multer = require('multer')
const cors = require('cors')
const fs = require('fs/promises')
const morgan = require('morgan')
const Middlewares = require('./middleware')
=======
const express = require("express");
const app = express();
const colors = require("colors");
const database = require("./database");
const path = require("path");
const multer = require("multer");
const cors = require("cors");
const fs = require("fs/promises");
const Middlewares = require("./middleware");
>>>>>>> 432e1e262aef70360766a8af36547e2a7d96d7ef

const Routes = require("./Routes");

require("dotenv").config();
const { PORT } = process.env;

<<<<<<< HEAD
require('dotenv').config()
const {PORT} = process.env

app.use(express.json())
app.use(cors())
app.use( express.static("views"))
//app.use(morgan("combined"))
=======
app.use(express.json());
app.use(cors());
app.use(express.static("views"));
>>>>>>> 432e1e262aef70360766a8af36547e2a7d96d7ef

//error handling

app.use(express.static("assets"));

app.listen(PORT || 4000, async () => {
  try {
    await database.Connect();

    console.log(colors.bold.green("Database Connected"));
  } catch (error) {
    console.log(error);
    console.log(colors.bold.red("Couldn't Connect to DB"));
  }

  console.log(colors.bold.cyan(`Served Hosted at http://localhost:${PORT}`));
});

//testing the image Upload Middleware
<<<<<<< HEAD
// app.post("/image" , Middlewares.ImageUpload , async (req,res) => {
//     let pather = `${req.protocol}://${req.hostname}/${req.file.originalname}`

//     let posted_body = {...req.body , path:pather}

//     res.status(200).send(posted_body)
    
// } )
// app.get("/test" ,(req,res) => {

//     res.status(200).send("asd")
// })
=======
app.post("/image", Middlewares.ImageUpload, async (req, res) => {
  let pather = `${req.protocol}://${req.hostname}/${req.file.originalname}`;

  res.status(200).send(pather);
});
app.get("/test", (req, res) => {
  res.status(200).send("asd");
});
>>>>>>> 432e1e262aef70360766a8af36547e2a7d96d7ef

/**************************** Main Features *****************************/

/******************** Routes ********************/

/* Mina */ /* Mahmoud */ /* Alyaa */
/****  meals route (5)  +    restaurants Route (5) +    Reviews Route (3)  ******/
app.use("/restaurants", Routes.RestRotues);

/* Mona */
/****  Subs Routes for admin (4)  ******/
app.use("/subs", Routes.SubRoutes);

/* Mona */
/****  Promotions Route (4)  ******/
app.use("/promotions", Routes.PromoRoutes);

/* Alyaa */ /* Mahmoud */
/******  Profile Routes (4) + User Subscriptions Routes (6)  ******/
app.use("/users", Routes.UserRoutes);

/* Mina */
/****** Account Routes (2)   *********/
app.use("/account", Routes.AccountRoutes);

/********** MiddleWare **********/

// Creating Images Upload Middleware using multer -------- Mahmoud
// Creating Authentication with JWT middleware -------- Mina

/*
        Secondary Feature
app.use("/sections" ,Routes.restRotues )
*/

app.use(Middlewares.ErrorMiddleware);

module.exports = app;
