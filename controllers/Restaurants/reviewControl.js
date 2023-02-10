const { ReviewModel } = require("./../../Models");
const error = require("./../../util/ErrorClass");
const impression = ["very good", "good", "bad"];
const ReviewControler = {
  /* getAllReviews */
  getAllReviews: async (req, res, next) => {
    try {
      const AllReviews = await ReviewModel.find({
        restaurantId: req.params.restaurantID,
      });
      res.status(200).send(AllReviews);
    } catch (error) {
      next(error);
    }
  },

  /*  getReviewByUserId*/
  getReviewByUserId: async (req, res, next) => {
    try {
      const ReviewByUserId = await ReviewModel.find({
        userID: req.params.userID,
      });
      res.status(200).send(ReviewByUserId);
    } catch (error) {
      next(error);
    }
  },

  /*createReview */
  createReview: async (req, res, next) => {
    try {
      const createReview = await ReviewModel.create(req.body);
      res.status(200).send(createReview);
    } catch (error) {
      next(error);
    }
  },

  /*EditReview */
  EditReview: async (req, res, next) => {
    try {
      if (req.body.impression) {
        const result = impression.findIndex((it) => {
          return it == req.body.impression;
        });
        if (result == -1) {
          const newError = error(
            "impression must be ver good or good or bad",
            400
          );
          next(newError);
          return;
        }
      }
      const editReview = await ReviewModel.findByIdAndUpdate(
        req.params.id,
        req.body
      );
      res.status(200).send(editReview);
    } catch (error) {
      next(error);
    }
  },

  /* DeleteReview*/
  DeleteReview: async (req, res, next) => {
    try {
      const deleteReview = await ReviewModel.findByIdAndDelete(req.params.id);
      res.status(200).send(deleteReview);
    } catch (error) {
      next(error);
    }
  },
};
module.exports = ReviewControler;
