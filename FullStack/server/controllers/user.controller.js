const { userModel } = require("../models/user.model");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
require("dotenv").config();

const signup = async (req, res) => {
  const { name, email, password } = req.body;
  // console.log(name, email, password);
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
    bcrypt.hash(password, 5, async (err, hash) => {
      // Store hash in your password DB.
      if (err) {
        console.log(err);
      } else {
        res.send("User created successfully");
        await userModel.create({ name, email, password: hash });
      }
    });
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
  // console.log(isValide);
  if (isValide) {
    bcrypt.compare(password, isValide.password, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        // console.log(isValide);
        jwt.sign({ userData: isValide }, process.env.key , (err, token) => {
          if (err) {
            return res.status(500).send("Error in signing up");
          }
          res
            .cookie("tokenvalue", token)
            .status(200)
            .json({ message: "token access successfully." });
        });
      }
    });
  } else {
    console.log("please login first");
  }
};
module.exports = { signup, signin };
