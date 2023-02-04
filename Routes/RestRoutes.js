const express = require('express')
const database = require('../database')
const router = express.Router()
const RestModel = require('../Models/RestModel')


router.get("/" , (req,res)=>{
    res.status(200).send("mah,moud")
    //code
})


/********* show route **********/
router.get("/" , (req,res)=>{ 
    //code
})

// /********** Update Route  **********/
// router.patch("/:id" , VerifyToken , (req,res) =>{
//     //code
// })

module.exports = router