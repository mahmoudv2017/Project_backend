const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const types = Schema.Types;
const PromoModel = new Schema(
  {
    sales_percentage: String,
    DateExpired: { type: types.Date },
    meal_id: [{ type: types.ObjectId, ref: "meals" }],
    restaurantID: [{ type: types.ObjectId, ref: "restaurants" }],
    old_price: Number,
  },
  { timestamps: true }
);
module.exports = mongoose.model("promotion", PromoModel);
