const jwt = require("jsonwebtoken");
const User = require("../models/User");
const bcrypt = require("bcrypt");

login = (req, res, next) => {
  // Check if email is already exist
  User.findOne({ email: req.body.email })
  .then((user) => {
    if (!user) {
      return res.status(401).send({
        message:
          "Your login credentials do not match with an account in our system.",
      });
    }
    bcrypt.compare(req.body.password, user.password)
    .then((validPassword) => {
      if (!validPassword) {
        return res.status(401).send({
          message:
            "Your login credentials do not match with an account in our system.",
        });
      }
      jwt.sign(
        { userId: user._id },
        process.env.JWT_SECRET,
        { expiresIn: "1d" },
        (err, token) => {
          if (err) {
            return res.status(500).send({
              message: "There was an error generating the access token.",
            });
          }

          res.send({
            message: "User logged successfully",
            access_token: token,
          });

          next();
        }
      );
    });
  });
};

module.exports = login;
