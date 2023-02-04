const express = require('express')
const { default: mongoose } = require('mongoose')
const router = express.Router()
const database = require('../database')
const RestModel = require('../Models/RestModel')

router.get("/" , async (req,res)=>{

    

    const results = await RestModel.find()
    

  

    res.status(200).send(results)
})

module.exports = router