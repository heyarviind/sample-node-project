const { makeAdmin, getUsers } = require("../controllers/user");

module.exports = function (router) {
  router.route("/user/:userId/make-admin/").put(makeAdmin);
  router.route("/users/").get(getUsers);
};
