const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var userSchema = new Schema({
  username: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    select: false,
  },
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  age: {
    type: Number,
  },
  role: {
    type: Number,
    default: 0, // 0 = user, 1 = admin
  },
});

module.exports = mongoose.model("User", userSchema);
