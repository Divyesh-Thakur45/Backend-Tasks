const userModel = require("../models/user.model");

const SignUpRouter = async (req, res) => {
  const { email, password } = req.body;
  try {
    await userModel.create({ email, password });
    res.status(201).json({ message: "User created successfully" });
    console.log("User created successfully");
  } catch (error) {
    console.log(error);
  }
};

module.exports = SignUpRouter;