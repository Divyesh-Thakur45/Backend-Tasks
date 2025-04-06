const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
require("dotenv").config();

const signUp = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Please provide all the required fields." });
    }
    const isExist = await userModel.findOne({ email });

    if (isExist) {
      return res.status(409).json({ message: "Email already exists." });
    } else {
      bcrypt.hash(password, 7, async (err, hash) => {
        if (err) {
          console.log(err);
          res.status(500).json({ message: "Error hashing password." });
        } else {
          const newUser = await userModel.create({ email, password: hash });
          res.status(200).json({ message: "user created successfully" });
          console.log(newUser);
        }
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const signIn = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Please provide all the required fields." });
  }
  const isExist = await userModel.findOne({ email });
  if (!isExist) {
    res.status(404).json({ message: "Email is not found" });
  } else {
    bcrypt.compare(password, isExist.password, async (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).json({ message: "Error during password comparison." });
      } else {
        if (result) {
          jwt.sign(
            { userInfo: isExist },
            process.env.privateKey,
            async (err, token) => {
              if (err) {
                return res.status(404).json({ message: "Error in JWT" });
              }
              res
                .cookie("tokenCookie", token)
                .json({ message: "Login Success fully", userData: isExist });
            }
          );
        }
      }
    });
  }
};
module.exports = { signUp, signIn };
