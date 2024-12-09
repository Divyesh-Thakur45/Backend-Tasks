const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const LoginRoutes = async (req, res) => {
  const { email, password } = req.body;
  try {
    const isValide = await userModel.findOne({ email });
    if (!isValide) {
      return res.status(400).json({ message: "User not found" });
    }
    bcrypt.compare(password, isValide.password, function (err, result) {
      if (err) {
        return res.status(400).json({ message: "Invalid credentials" });
      } else {
        // return res.json({ message: "Login successful" });
        console.log("Login successful");
        const token = jwt.sign(
          { Token: isValide._id },
          "zxcvbnm",
          function (err, token) {
            console.log(token);
          }
        );
        res.cookie(token);
        return res.json({ message: "Login successful" });
      }
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = LoginRoutes;
