const express = require('express')
const database = require('../database')
const router = express.Router()
const RestModel = require('../Models/RestModel')


router.get("/", async (req, res) => {
    try {

     //  const databaser = await database()

        const results = await RestModel.find()

        // Disconnecting DB
      //  databaser.disconnect()
        res.status(200).send(results)


    } catch (error) {
        res.status(500).send("Somthing Went Wrong")
    }
    
})

module.exports = router