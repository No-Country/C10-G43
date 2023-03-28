// Node Js server
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT_SERVER || 8000;

app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
