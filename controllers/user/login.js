const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Functions = require("./functions");

async function login(req, res) {
  const username = req.body.username;
  const password = req.body.password;

  Functions.getUserByUsername({ username: username, type: "login" })
    .then((user) => {
      if (bcrypt.compareSync(password, user.password)) {
        const token = jwt.sign({ id: user._id }, "f1KStzTlzy", {
          expiresIn: "30d",
        });

        res.status(200).json({
          token: token,
        });
      }
    })
    .catch((error) => {
      res.status(401).json({
        message: "Invalid username or password!",
      });
    });
}

module.exports = login;
