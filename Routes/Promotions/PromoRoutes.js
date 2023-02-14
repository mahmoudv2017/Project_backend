const express = require("express");
const router = express.Router();
const PromotionController = require("./../../controllers/Promotions/promoControl");

/* SHOW All Promotions*/
router.get("/", PromotionController.getAllPromotions);
/* Create new promotion */
router.post("/", PromotionController.createNewPromotion);
/* Get promotion by id */
router.get("/:id", PromotionController.getPromotionById);
/* update promotion */
router.patch("/:id", PromotionController.updatePromotion);
/*  Delete promotion*/
router.delete("/:id", PromotionController.deletePromotion);
module.exports = router;
