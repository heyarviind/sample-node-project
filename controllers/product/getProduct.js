const { getProduct } = require("./functions");

async function getSingleProduct(req, res) {
  const productId = req.params.productId;
  const product = await getProduct({
    productId: productId,
    userRole: req.role,
  });

  res.status(200).json(product);
}

module.exports = getSingleProduct;
