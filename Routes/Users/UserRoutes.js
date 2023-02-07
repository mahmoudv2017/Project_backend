const express = require('express')
const userSups = require('./UserSupsRoutes');
const router = express.Router()

const ProfileControl = require('../../controllers/Users/ProfileControl')


//========================================
//          User Subscriptions Routes
//========================================
userSups(router)


//========================================
//          Profile Routes
//========================================
router.get("/" , ProfileControl.IndexFunc)

module.exports = router