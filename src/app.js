const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config({ path: "./.env.local" });
const airbnbRouter = require("./Routes/airbnbRoutes.js");

app.use(express.json());
app.use(cors());
app.use(airbnbRouter);

//#####################################
const conn_str = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster1.fsgvdfp.mongodb.net/sample_airbnb?retryWrites=true&w=majority`;
try {
  // Connect to the MongoDB cluster
  mongoose.connect(
    conn_str,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log("mongodb is connected")
  );
} catch (err) {
  console.log("error in connection");
}
//####################################

app.use("/hello", (req, res, next) => {
  res.status(200).send({ message: "Hello world" });
});
// Not found handling
app.use((req, res, next) => {
  res.status(404);
  const error = new Error("not found");
  next(error);
});
// Errors handling
app.use((error, req, res, next) => {
  res.status(res.statusCode || 500);
  res.json({
    message: error.message,
  });
});

module.exports = app;
