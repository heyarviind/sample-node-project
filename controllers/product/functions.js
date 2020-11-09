const Product = require("../../models/product");

function addProduct(product) {
  return product
    .save()
    .then(() => {})
    .catch((error) => Promise.reject(error));
}

function getProduct({ productId, userRole }) {
  let query = Product.findOne({ _id: productId });
  // select `created_by` if userRole is 1 (admin)
  if (userRole) {
    query.select("+created_by");
    query.populate("created_by");
  }
  return query
    .exec()
    .then((product) => Promise.resolve(product))
    .catch((error) => Promise.reject(error));
}

function deleteProduct({ productId }) {
  return Product.deleteOne({ _id: productId })
    .then((response) => Promise.resolve(response))
    .catch((error) => Promise.reject(error));
}

function getAllProducts(userRole) {
  let query = Product.find({});
  // select `created_by` if userRole is 1 (admin)
  if (userRole) {
    query.select("+created_by");
    query.populate("created_by");
  }
  return query
    .exec()
    .then((products) => Promise.resolve(products))
    .catch((error) => Promise.reject(error));
}

function updateProduct({ productId, payload }) {
  return Product.findOneAndUpdate(
    { _id: productId },
    { $set: payload },
    { new: true }
  )
    .then((product) => Promise.resolve(product))
    .catch((error) => Promise.reject(error));
}

module.exports = {
  addProduct,
  getProduct,
  deleteProduct,
  updateProduct,
  getAllProducts,
};
