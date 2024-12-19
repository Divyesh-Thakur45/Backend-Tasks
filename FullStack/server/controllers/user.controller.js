const { userModel } = require("../models/user.model");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

const signup = async (req, res) => {
  const { name, email, password } = req.body;
  console.log(name, email, password);
  if (req.body.role) {
    return res.send("must be user");
  }
  if (!name || !email || !password) {
    return res.status(400).send("All fields are required");
  }
  try {
    const isExistUser = await userModel.findOne({ email });
    if (isExistUser) {
      return res.status(400).send("Email already exists");
    }
    await userModel.create({ name, email, password });
    res.send("User created successfully");
  } catch (error) {
    console.log(error);
  }
};

const signin = async (req, res) => {
  const { email, password } = req.body;
  // console.log(email, password);

  if (!email || !password) {
    return res.status(400).send("All fields are required");
  }
  const isValide = await userModel.findOne({ email });
  console.log(isValide);
  if (isValide) {
    bcrypt.compare(password, isValide.password, (err, result) => {
      if (err) {
        console.log("wrong password");
      } else {
        console.log("Right password");
        jwt.sign({ foo: "bar" }, "zxcvbnm", function (err, token) {
          console.log(token);
          res.send(token);
          // Set the token in a cookie
          res.cookie("Cookies", token, {
            httpOnly: true, // Prevents client-side access to the cookie
            secure: false, // Use `true` in production with HTTPS
            maxAge: 24 * 60 * 60 * 1000, // Expires in 1 day
            sameSite: "strict", // Helps protect against CSRF
          });
        });
      }
    });
  } else {
    console.log("please login first");
  }
};
module.exports = { signup, signin };
