const { addUser, login } = require("../controllers/user/");

module.exports = function (router) {
  router.route("/auth/add-user/").post(addUser);
  router.route("/auth/login/").post(login);
};
