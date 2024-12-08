const express = require("express");
const userModel = require("../models/user.model");

const userControler = express.Router();

userControler.post("/create", async (req, res) => {
  const { name, email, password } = req.body;
  console.log(name, email, password);
  try {
    await userModel.create({ name, email, password });
    console.log("created data successfully");
    res.send("data successfully");
  } catch (error) {
    res.send(error);
    res.status(400);
    console.log(error);
  }
});

userControler.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const isLogin = await userModel.findOne({ email, password });
    if(!isLogin){
      return res.send("Register Firstly");
    }
    // else if(req.body.email != isLogin && req.body.password != isLogin){
    //   return res.send("Invalid ");
    // }
    else if(req.body == isLogin){
      return res.send("Logged In Successfully");
    }
    res.send("ok")
  } catch (error) {
    res.send(error);
    res.status(400);
    console.log(error);
  }
});

module.exports = userControler;
