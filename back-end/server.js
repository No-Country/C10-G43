// Node Js server
const express = require('express');
const app = express();
const cors = require("cors");
const morgan = require('morgan');
require("dotenv").config();
const {PORT_SERVER} = process.env;
require('./config/dbConfig');


app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Routes
require("./Routes/user.routes")(app);

app.listen(PORT_SERVER,()=>{
    console.log(`Server running on port ${PORT_SERVER}`);
})