const express = require("express");
//const database = require('../database')
const router = express.Router();
const RestControls = require("../../controllers/Restaurants/restControl");
const MealsRoutes = require("./mealsRoutes");
const ReviewsRoutes = require("./ReviewRoutes");

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
router.post("/", RestControls.CreateFunc);

/* Delete Route */
router.delete("/:id", RestControls.DeleteFunc);

/* Update Route */
router.patch("/:id", RestControls.UpdateFunc);

module.exports = router;
