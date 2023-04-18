const router = require("express").Router();
const { registerUser, loginUser, getUserInfo } = require("../controllers/userController.js");
const { getIdUser } = require("../middlewares/authMiddleware.js");

// Register user account

router.post("/register", registerUser);

// Login user account

router.post("/login", loginUser);

module.exports = router;

// Get user info (Home page)

router.post("/get-user-info", getIdUser, getUserInfo);