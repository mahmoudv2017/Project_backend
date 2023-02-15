const { PromoModel } = require("../../Models");
const PromotionController = {
  /* SHOW All Promotions*/
  getAllPromotions: async (req, res, next) => {
    try {
      const getAllPromotions = await PromoModel.find();
      res.status(200).send(getAllPromotions);
    } catch (error) {
      next(error);
    }
  },
  /* Create new promotion */
  createNewPromotion: async (req, res, next) => {
    try {
      const createPromotion = await PromoModel.create(req.body);
      res.status(200).send(createPromotion);
    } catch (error) {
      next(error);
    }
  },
  /* Get promotion by id */
  getPromotionById: async (req, res, next) => {
    try {
      const getPromotion = await PromoModel.findById(req.params.id);
      res.status(200).send(getPromotion);
    } catch (error) {
      next(error);
    }
  },
  /* update promotion */
  updatePromotion: async (req, res, next) => {
    try {
      const updatedPromotion = await PromoModel.findByIdAndUpdate(
        req.params.id,
        req.body
      );
      res.status(200).send(updatedPromotion);
    } catch (error) {
      next(error);
    }
  },
  /*  Delete promotion*/
  deletePromotion: async (req, res, next) => {
    try {
      const deletePromotion = await PromoModel.findByIdAndDelete(req.params.id);
      res.status(200).send(deletePromotion);
    } catch (error) {
      next(error);
    }
  },
};
module.exports = PromotionController;
