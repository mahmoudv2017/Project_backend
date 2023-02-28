const express = require("express");
const router = express.Router();
const AdminControls = require("./../../controllers/Admin/AdminControl");

/* SHOW All Promotions*/
router.get("/subs", AdminControls.getAllSubs);

router.delete("/subs/:id", AdminControls.DeleteFunc);

router.get("/users", AdminControls.getAllUsers);

router.patch("/users/:id", AdminControls.UpdateFunc);
router.delete("/users/:id", AdminControls.UserDeleteFunc);

module.exports = router;
