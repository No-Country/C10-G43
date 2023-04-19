const controller = require("../controller/auth.controller");
const { authJwt } = require("../middlewares");
const checkDuplicateUsernameOrEmail = require("../middlewares/verifySignUp");
const services = require("../services/user.service")


module.exports = function (app) {
  app.get("/", controller.test);
  app.post("/api/signup", [checkDuplicateUsernameOrEmail], controller.signup);
  app.post("/api/login", controller.login);
  app.get("/main/:_id",[authJwt.verifyToken],services.userData) //x-access-token
  app.get("/admin/:_id", [authJwt.verifyToken, authJwt.isAdmin], controller.test);

  /***
   * TESTEAR
   */



  /***
   * TESTEAR
   */
};
