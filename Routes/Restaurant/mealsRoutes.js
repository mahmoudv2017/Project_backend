// const express = require('express')
// const router = express.Router()



// router.get("/:resID/meal/:meaID" , (req,res) => {
//     console.log("ended")
//     res.status(200).send(req.params)
// })

// router.get("/:resID" , (req,res) => {
//     console.log("ended tanby wa7ed")
//     res.status(200).send(req.params)
// })


const Mealmode = require('../../Models/Restaurants/MealsModel')

module.exports = function(router){

    /* Index Route */
    router.get("/:RestID/meals" , async (req,res) => {
        try {
            const results = await Mealmode.find({restaurantID:req.params.RestID})
            res.status(200).send(results)
        } catch (error) {
            res.status(500).send("Error")
        }
    })

}