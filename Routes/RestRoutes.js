const express = require('express')
const database = require('../database')
const router = express.Router()
const RestModel = require('../Models/RestModel')


router.get("/:id" , (req,res)=>{
    //code
})


/********* show route **********/
router.get("/" , (req,res)=>{ 
    //code
})

/********** Update Route  **********/
router.patch("/:id" , VerifyToken , (req,res) =>{
    //code
})

module.exports = router