const express = require('express')
const userSups = require('./UserSupsRoutes');
const router = express.Router()

router.use('/userSubs' , userSups)


/******* User Routes ******/
router.get("/" , (req,res)=>{
    console.log(req.params)
    res.status(200).send("asdasd")
})

module.exports = router