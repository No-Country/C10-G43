
const User = require("../models/User");
const JoiuserSchema= require("./JoiSchema")

exports.signup =  async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    extensionNumber,
    phoneNumber,
    identificationType,
    identificationNumber,
    address,
    country,
    password,
  } = req.body;
  const user = new User({
    firstName,
    lastName,
    email,
    extensionNumber,
    phoneNumber,
    identificationType,
    identificationNumber,
    address,
    country,
    password,
  });
  console.log(req.body)


  try {
    const { Joirerror } = JoiuserSchema.validate(req.body);
    if (Joirerror) {
      return res.status(400).send(Joirerror.details[0].message);
    }
    await user.save();
    res.send({ message: "User was registered successfully!" });
  } catch (error) {
    res.status(500).send({ message: error.message });
    
  }

};

exports.test = (req, res) => {
res.send({message:"ok"})
}
