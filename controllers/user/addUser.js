const bcrypt = require("bcryptjs");
const User = require("../../models/user");
const { addUser } = require("./functions");

function addNewUser(req, res) {
  const body = req.body;

  let user = new User();

  user.username = body.username;
  user.name = body.name;
  user.lastName = body.lastName;
  user.age = body.age;
  user.password = bcrypt.hashSync(body.password, 2);

  addUser(user)
    .then((response) => {
      res.status(200).json({
        message: "User created",
      });
    })
    .catch((error) => {
      res.status(400).json({
        message: error.message,
      });
    });
}

module.exports = addNewUser;
