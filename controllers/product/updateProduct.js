const { updateProduct } = require("./functions");

function updateSingleProduct(req, res) {
  const productId = req.params.productId;
  const body = req.body;

  if (Permissions[req.role].updateProduct) {
    if (productId) {
      const payload = {
        name: body.name,
        price: body.price,
        description: body.description,
      };

      updateProduct({ productId: productId, payload: payload })
        .then((product) => {
          res.status(200).json(product);
        })
        .catch((error) => {
          res.status(500).json({
            message: "Something went wrong",
          });
        });
    } else {
      res.status(401).json({
        message: "Product Id is missing!",
      });
    }
  } else {
    res.status(403).send({
      message: "You don't have permission to update the product!",
    });
  }
}

module.exports = updateSingleProduct;
