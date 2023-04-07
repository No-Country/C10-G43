const User= require("../models/User")

checkDuplicateUsernameOrEmail = (req, res, next) => {


      // Check if email is already in use
      User.findOne({ email: req.body.email })
        .then(user => {
          if (user) {
            res.status(400).send({ message: "Failed! Email is already in use!" });
            return;
          }

          next();
        });
    ;
}

module.exports = checkDuplicateUsernameOrEmail;