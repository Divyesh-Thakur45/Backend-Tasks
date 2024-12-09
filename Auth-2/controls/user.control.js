const express = require("express");
const SignUpRouter = require("../routes/SignUp");
const LoginRoutes = require("../routes/Login");

const userRouter = express.Router();

userRouter.post("/signup", SignUpRouter);

userRouter.post("/login", LoginRoutes);

module.exports = userRouter;
