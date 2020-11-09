const { addProduct } = require("./functions");
const Product = require("../../models/product");
const Permissions = require("../../misc/permissions");

function addNewProduct(req, res) {
  if (Permissions[req.role].addProduct) {
    const body = req.body;
    let product = new Product();

    product.name = body.name;
    product.price = body.price;
    product.description = body.description;
    product.created_by = req.userId;

    addProduct(product)
      .then(() => {
        res.status(200).json({
          message: "Product added!",
        });
      })
      .catch((error) => {
        res.status(500).json({
          message: error.message,
        });
      });
  } else {
    res.status(403).send({
      message: "You don't have permission to add the product!",
    });
  }
}

module.exports = addNewProduct;
