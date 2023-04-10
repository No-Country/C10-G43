const jwt = require("jsonwebtoken");
const config = require("../config/auth.config");
const User = require("../models/User");

verifyToken = (req, res, next) => {
  const token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({ message: "No token provided!" });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "Unauthorized!" });
    }

    req.userId = decoded.id;
    next();
  });
};


isAdmin = (req, res, next) => {
  User.findOne({ _id: req.params._id } )
  .then(user=>{
    if(user.isAdmin===true){
      next();
      return
    }
    res.status(403).send({ message: "Require Admin Role!" });
    return;
  }
  )
}

const authJwt = {
  verifyToken: verifyToken,
  isAdmin: isAdmin,
};
module.exports = authJwt;
