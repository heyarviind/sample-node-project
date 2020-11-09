const {
  addProduct,
  getAllProducts,
  deleteProduct,
  updateProduct,
  getProduct,
} = require("../controllers/product/");

const verifyToken = require("../misc/verifyToken");

module.exports = function (router) {
  router.route("/product/").post(verifyToken, addProduct);
  router
    .route("/product/:productId/")
    .get(verifyToken, getProduct)
    .delete(verifyToken, deleteProduct)
    .put(verifyToken, updateProduct);
  router.route("/products/").get(verifyToken, getAllProducts);
};
