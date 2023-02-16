const express = require('express')
const router = express.Router()

const verify=require('../../middleware/VerifyToken')

const ACCONTROL = require('../../controllers/Accounts/AccountControl')

/********** ************/
router.post('/login',ACCONTROL.Login)

router.post('/register',ACCONTROL.Register)

module.exports = router