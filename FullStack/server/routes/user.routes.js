const express = require("express");
const { signup } = require("../controllers/user.controller");

userRoutes = express.Router();

userRoutes.post("/signup", signup);

module.exports = { userRoutes };
