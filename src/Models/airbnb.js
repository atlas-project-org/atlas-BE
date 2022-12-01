const mongoose = require("mongoose");

// design the schema for DB to use in express
const AirbnbSchema = new mongoose.Schema({
  name: String,
});

// export model(chosen name, schema, collection name)
const Airbnb = mongoose.model("Airbnb", AirbnbSchema, "listingsAndReviews");

module.exports = Airbnb;
