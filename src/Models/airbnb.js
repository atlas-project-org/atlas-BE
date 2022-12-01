const mongoose = require("mongoose");

const AirbnbSchema = new mongoose.Schema({
  name: String,
});

const Airbnb = mongoose.model("Airbnb", AirbnbSchema, "listingsAndReviews");

module.exports = Airbnb;
