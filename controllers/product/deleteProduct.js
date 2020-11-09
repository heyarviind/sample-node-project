const { deleteProduct } = require("./functions");
const Permissions = require("../../misc/permissions");

async function deleteSingleProduct(req, res) {
  const productId = req.params.productId;

  if (Permissions[req.role].deleteProduct) {
    if (productId) {
      if (Permissions[req.role].deleteProduct) {
        const product = await deleteProduct({ productId: productId });
        res.status(200).json(product);
      } else {
        res.status(403).send({
          message: "You don't have permission to add the product!",
        });
      }
    } else {
      res.status(401).json({
        message: "Product Id is missing!",
      });
    }
  } else {
    res.status(403).send({
      message: "You don't have permission to delete the product!",
    });
  }
}

module.exports = deleteSingleProduct;
