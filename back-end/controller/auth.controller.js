const bcrypt= require("bcrypt")
const User = require("../models/User");
const JoiuserSchema= require("./JoiSchema")


exports.signup =  async (req, res) => {

  
  try {
    const { Joirerror } = JoiuserSchema.validate(req.body);
    if (Joirerror) {
      return res.status(400).send(Joirerror.details[0].message);
    }
    const user = new User(req.body);
    const salt = await bcrypt.genSalt(10);
    const hash= await bcrypt.hash(user.password,salt)
    user.password=hash
    await user.save();
    res.send({ message: "User was registered successfully!" });
  } catch (error) {
    res.status(500).send({ message: error.message });
    
  }

};


exports.login= async (req, res) => {

  
}

exports.test = (req, res) => {
res.send({message:"ok"})
}
