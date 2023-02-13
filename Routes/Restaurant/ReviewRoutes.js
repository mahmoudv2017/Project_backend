const reviewControler = require("./../../controllers/Restaurants/reviewControl");

module.exports = function (router) {
  /* Index route */
  router.get("/:restaurantID/reviews", reviewControler.getAllReviews);

  /* Index by userID route */
  router.get(
    "/:restaurantID/users/:userID/reviews",
    reviewControler.getReviewByUserId
  );

  /* Create route */
  router.post(
    "/:restaurantID/users/:userID/reviews",
    reviewControler.createReview
  );

  /* Edit route */
  router.patch(
    "/:restaurantID/users/:userID/reviews/:id",
    reviewControler.EditReview
  );

  /* Delete route */
  router.delete(
    "/:restaurantID/users/:userID/reviews/:id",
    reviewControler.DeleteReview
  );
};
