const { userModel } = require("../models/user.model");

const signup = async (req, res) => {
  const { name, email, password } = req.body;
  if (req.body.role) {
    return res.send("must be user");
  }
  if (!name || !email || !password) {
    return res.status(400).send("All fields are required");
  }
  try {
    const isExistUser = userModel.findOne({ email });
    if (!isExistUser) {
      return res.status(400).send("Email already exists");
    } else {
      await userModel.create({ name, email, password });
      res.send("User created successfully");
    }
  } catch (error) {
    console.log(error);
  }
};
module.exports = { signup };
