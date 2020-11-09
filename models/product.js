const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
  created_by: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
    select: false,
  },
});

module.exports = mongoose.model("Product", productSchema);
