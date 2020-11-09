var express = require("express");
var router = express.Router();

require("./auth")(router);
require("./product")(router);
require("./user")(router);

module.exports = router;
