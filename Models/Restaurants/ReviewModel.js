const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const types = Schema.Types;
const ReviewModel = new Schema(
  {
    username: String,
    userID: [{ type: types.ObjectId, ref: "users" }],
    comment: String,
    impression: { type: String, enum: ["very good", "good", "bad"] },
    //   timeCreated: [{ type: Date, default: Date.now }],
    restaurantId: [{ type: types.ObjectId, ref: "restaurants" }],
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("reviews", ReviewModel);
