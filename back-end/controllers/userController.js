const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const registerUser = async (req, res) => {
  try {
    // check if user exists

    const user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).send({
        success: false,
        message: "User already exists",
      });
    }
    // hash the password

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashedPassword;
    const newUser = new User(req.body);
    await newUser.save();
    res.status(200).send({
      message: "User created succesfully",
      data: null,
      success: true,
    });
  } catch (error) {
    res.status(400).send({
      message: error.message,
      success: false,
    });
  }
};

const loginUser = async (req, res) => {
  try {
    // check if user exists
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).send({
        success: false,
        message: "User does not exist",
      });
    }

    // Check is the password is correct
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      return res.status(400).send({
        success: false,
        message: "Invalid password",
      });
    }

    // Generate token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res.send({
      message: "User logged succesfully",
      Access_token: token,
      userId: user._id,
      success: true,
    });
  } catch (error) {
    res.status(400).send({
      message: error.message,
      success: false,
    });
  }
};

const getUserInfo = async (req, res) => {
  try {
    const user = { ...(await User.findById(req.body.userId))._doc };
    delete user.password;
    res.send({
      message: "User info fetched succesfully",
      data: user,
      success: true,
    });
  } catch (error) {
    res.status(400).send({
      message: error.message,
      success: false,
    });
  }
};

module.exports = {
  registerUser,
  loginUser,
  getUserInfo,
};
