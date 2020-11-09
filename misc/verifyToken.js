const jwt = require("jsonwebtoken");
const { getUserById } = require("../controllers/user/functions");

function verifyToken(req, res, next) {
  if (req.headers.authorization || req.body.token || req.cookies.token) {
    let token = "";
    if (req.headers.authorization) {
      token = String(req.headers.authorization).split(" ");
    } else if (req.body.token) {
      token = String(req.body.token).split(" ");
    } else {
      token = String(req.cookies.token).split(" ");
    }

    if (token[0] === "X-Token") {
      jwt.verify(token[1], "f1KStzTlzy", async function (err, decoded) {
        if (err) {
          return res.status(401).send({
            auth: false,
            message: "Failed to authenticate token",
            error: err,
          });
        }

        const user = await getUserById({ userId: decoded.id });

        if (!user)
          return res
            .status(401)
            .send({ auth: false, message: "Invalid token" });

        req.userId = user._id;
        req.role = user.role;

        next();
      });
    } else {
      return res.status(401).send({ auth: false, message: "Invalid token" });
    }
  } else {
    return res.status(403).send({ auth: false, message: "No token provided" });
  }
}

module.exports = verifyToken;
