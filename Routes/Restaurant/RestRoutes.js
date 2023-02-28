const express = require("express");
//const database = require('../database')
const router = express.Router();
const RestControls = require("../../controllers/Restaurants/restControl");
const MealsRoutes = require("./mealsRoutes");
const ReviewsRoutes = require("./ReviewRoutes");
const Middlewares = require('../../middleware');


/* current position: restaurants*/

//========================================
//          Meals Routes
//========================================
MealsRoutes(router);

//========================================
//          Reviews Routes
//========================================
ReviewsRoutes(router);

//========================================
//          Restaurant Routes
//========================================

/* Show Route */
router.get("/:id", RestControls.ShowFunc);

/* Index Route */
router.get("/", RestControls.IndexFunc);

/* Create Route */
router.post("/" , Middlewares.ImageUpload ,  RestControls.CreateFunc);

/* Delete Route */
router.delete("/:id", RestControls.DeleteFunc);

/* Update Route */
router.patch("/:id", Middlewares.ImageUpload , RestControls.UpdateFunc);

module.exports = router;
