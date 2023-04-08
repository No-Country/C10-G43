const controller= require("../controller/auth.controller")
const login= require("../middlewares/login")
const checkDuplicateUsernameOrEmail = require("../middlewares/verifySingUp")
module.exports=function(app){





    app.post("/api/signup",
    [
        checkDuplicateUsernameOrEmail,
      ],
    controller.signup
    )

    app.post("/api/login",
    [
      login,
    ],
     controller.login)


    app.get("/",
    controller.test
    )
}