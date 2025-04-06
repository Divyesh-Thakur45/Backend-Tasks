const express = require("express");
const { signUp, signIn } = require("../controllers/user.controller");
// const isAuth = require("../middlewares/isAuth.middleware");

const userRouter = express.Router();

// Sign Up
userRouter.post("/signup", signUp);

// sign in
userRouter.post("/signin", signIn);
module.exports = userRouter;
