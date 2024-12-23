var jwt = require("jsonwebtoken");
require("dotenv").config();

const isAuth = (req, res, next) => {
  const { tokenvalue } = req.cookies;
  if (!tokenvalue) {
    return res.status(401).json({ message: "Login Required" });
  }
  jwt.verify(tokenvalue, process.env.key, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Invalid Token" });
    }
    // res.send("ok");
    // console.log(decoded);
    req.user = decoded.userData;
    next();
  });
};
module.exports = { isAuth };
