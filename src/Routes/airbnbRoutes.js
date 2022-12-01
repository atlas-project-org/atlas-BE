const express = require("express");
const airbnbModel = require("../Models/airbnb.js");
const app = express();

app.get("/testme", async (request, response) => {
  // send query with .find parameters to look for
  // *note: add .limit(<num>) to set limit
  const placesToStay = await airbnbModel.find({
    name: "Private Room in Bushwick",
  });

  try {
    response.status(200).json(placesToStay);
  } catch (error) {
    response.status(500).json(error);
  }
});

module.exports = app;
