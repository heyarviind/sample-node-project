const { updateUser } = require("./functions");

function makeAdmin(req, res) {
  const userId = req.params.userId;

  updateUser({ userId: userId }).then((user) => {
    res.status(200).json(user);
  });
}

module.exports = makeAdmin;
