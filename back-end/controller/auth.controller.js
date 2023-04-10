const bcrypt = require("bcrypt");
const User = require("../models/User");
const JoiuserSchema = require("./JoiSchema");
const jwt = require('jsonwebtoken');

exports.signup = async (req, res) => {
  try {
    const { Joirerror } = JoiuserSchema.validate(req.body);
    if (Joirerror) {
      return res.status(400).send(Joirerror.details[0].message);
    }
    const user = new User(req.body);
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);
    user.password = hash;
    await user.save();
    res.send({ message: "User was registered successfully!" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email } );
    
    if (!user) {
      return res.status(401).send({
        message:
          "Your login credentials do not match with an account in our system user.",
      });
    }
  
    const passwordIsValid = await bcrypt.compare(req.body.password, user.password);
    if (!passwordIsValid) {
      return res.status(401).send({
        message:
          "Your login credentials do not match with an account in our system password.",
      });
    }
    const token = jwt.sign({id: user._id.toString()}, process.env.JWT_SECRET, {
      expiresIn: 86400, // 24 hours "10m" para que dure 10 minutos
    });
    if (!token) {
      return res.status(500).send({
        message: "There was an error generating the access token.",
      });
    }
   return  res.send({
      message: "User logged successfully",
      access_token: token,
      user_id:user._id.toString()
    });
  
  } catch (error) {
    res.send({error:"eorr"});
  }
};

exports.test = (req, res) => {
  res.send({ rammus_says: "ok" });
};
