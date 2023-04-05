const controller= require("../controller/auth.controller")
const checkDuplicateUsernameOrEmail = require("../middlewares/verifySingUp")
module.exports=function(app){





    app.post("/api/signup",
    [
        checkDuplicateUsernameOrEmail,
      ],
    controller.signup
    )

    app.get("/",
    controller.test
    )
}