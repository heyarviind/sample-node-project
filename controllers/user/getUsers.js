const { getAllUsers } = require("./functions");

async function getUsers(req, res) {
  const allUsers = await getAllUsers();

  res.status(200).json(allUsers);
}

module.exports = getUsers;
