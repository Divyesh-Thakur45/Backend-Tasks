var jwt = require("jsonwebtoken");
require("dotenv").config();

const isAuth = (req, res, next) => {
  const { tokenCookie } = req.cookies;
  console.log(tokenCookie);
  jwt.verify(tokenCookie, process.env.privateKey, async (err, decoded) => {
    if (err) {
      res.status(403).json({ error: "Unauthorized Access" });
    } else {
      req.user = decoded.userInfo;
      next();
    }
  });
};

module.exports = isAuth;
