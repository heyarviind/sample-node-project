const { getAllProducts } = require("./functions");

async function getAllProduct(req, res) {
  const products = await getAllProducts(req.role);

  res.status(200).json(products);
}

module.exports = getAllProduct;
