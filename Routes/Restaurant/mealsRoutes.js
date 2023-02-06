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




module.exports = function(router){
    router.get("/:RestaurantID/meals" , (req,res) => {
        res.status(200).send(req.params)
    })
}