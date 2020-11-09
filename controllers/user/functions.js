const User = require("../../models/user");

function addUser(user) {
  return user
    .save()
    .then((res) => Promise.resolve(res))
    .catch((error) => Promise.reject(error));
}

function getUserByUsername({ username, type }) {
  let query = User.findOne({ username: username });
  if (type == "login") {
    query.select("+password");
  }
  return query
    .exec()
    .then((user) => Promise.resolve(user))
    .catch((error) => Promise.reject(error));
}

function getAllUsers() {
  return User.find({})
    .then((users) => Promise.resolve(users))
    .catch((error) => Promise.reject(error));
}

function getUserById({ userId }) {
  return User.findOne({ _id: userId })
    .then((user) => Promise.resolve(user))
    .catch((error) => Promise.reject(error));
}

function updateUser({ userId }) {
  return User.findOneAndUpdate(
    { _id: userId },
    { $set: { role: 1 } },
    { new: true }
  )
    .then((user) => Promise.resolve(user))
    .catch((error) => Promise.reject(error));
}

module.exports = {
  addUser,
  getUserByUsername,
  getUserById,
  updateUser,
  getAllUsers,
};
