const router = require("express").Router();
const {
  registerUser,
  loginUser,
  getUserInfo,
} = require("../controllers/userController.js");

// Register user account

router.post("/register", registerUser);

// Login user account

router.post("/login", loginUser);


module.exports = router;
