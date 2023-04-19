const User = require("../models/User");
exports.userData=async (req, res) => { 
 User.findOne({ _id: req.params._id } )
 .then((user)=>{
    if(!user){
        return res.status(401).send({
          message:
            "Error in login",
        });
    }
   return res.status(200).send(user);
 })

}

