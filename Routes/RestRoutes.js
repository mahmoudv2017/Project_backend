const express = require('express')
const router = express.Router()
const RestModel = require('../Models/RestModel')

router.get("/", async (req, res) => {
    try {
        const results = await RestModel.find()

        res.status(200).send(results)
    } catch (error) {
        res.status(500).send("Somthing Went Wrong")
    }
    
})

module.exports = router