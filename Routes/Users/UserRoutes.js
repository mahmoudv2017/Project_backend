const express = require("express");
const userSups = require("./UserSupsRoutes");
const router = express.Router();

const ProfileControl = require("../../controllers/Users/ProfileControl");

//========================================
//          User Subscriptions Routes
//========================================
userSups(router);

//========================================
//          Profile Routes
//========================================
/*
A Show route : /users/:id [GET]
A Index route : /users [GET]
A Delete route : /users/:id [DELETE]
A Update route : /users/:userID [PATCH]*/

router.get("/", ProfileControl.IndexFunc);
router.get("/:id", ProfileControl.getUserByID);
router.delete("/:id", ProfileControl.deleteUser);
router.patch("/:id", ProfileControl.updateUserById);
module.exports = router;
