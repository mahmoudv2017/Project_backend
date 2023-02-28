const reviewControler = require("./../../controllers/Restaurants/reviewControl");
const Middleware = require('../../middleware')

module.exports = function (router) {
  /* Index route */
  router.get("/:restaurantID/reviews", Middleware.VerifyToken , reviewControler.getAllReviews);

  /* Index by userID route */
  router.get(
    "/:restaurantID/users/:userID/reviews",
    Middleware.VerifyToken ,
    reviewControler.getReviewByUserId
  );

  /* Create route */
  router.post(
    "/:restaurantID/users/:userID/reviews",
    Middleware.VerifyToken ,
    reviewControler.createReview
  );

  /* Edit route */
  router.patch(
    "/:restaurantID/users/:userID/reviews/:id",
    Middleware.VerifyToken ,
    reviewControler.EditReview
  );

  /* Delete route */
  router.delete(
    "/:restaurantID/users/:userID/reviews/:id",
    Middleware.VerifyToken ,
    reviewControler.DeleteReview
  );
};
