const express = require('express')
const router = express.Router()

router.get("/" , (req,res)=>{
    res.status(200).send("Restaurants")
})

module.exports = router