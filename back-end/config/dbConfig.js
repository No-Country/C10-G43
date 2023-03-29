const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.MONGODB_URL);

const connectionResult = mongoose.connection;

connectionResult.on("error", () => {
  console.log(console, "connection error: ");
});
connectionResult.on("connected", () => {
  console.log("Mongo DB connected succesfully");
});

module.exports = connectionResult;