const express = require("express");
const {
  createStudent,
  getallStudent,
  getOneStudent,
  deleteStudent,
  updateStudent,
} = require("../controllers/student.controller");
const isAuth = require("../middlewares/isAuth.middleware");

const studentRouter = express.Router();

studentRouter.post("/create", isAuth, createStudent);

studentRouter.get("/getall/:stdid", isAuth, getallStudent);

studentRouter.get("/getone/:stdid", isAuth, getOneStudent);

studentRouter.delete("/deleteone/:id", isAuth, deleteStudent);

studentRouter.patch("/update/:id", isAuth, updateStudent);

module.exports = studentRouter;
