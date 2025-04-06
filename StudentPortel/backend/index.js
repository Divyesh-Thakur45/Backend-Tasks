const express = require("express");
var cookieParser = require("cookie-parser");
const connection = require("./configs/db");
const userRouter = require("./routes/user.routes");
const studentRouter = require("./routes/student.routes");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/user", userRouter);
app.use("/student", studentRouter);

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Connected to the database successfully 🎉");
    console.log(`Server is running on port ${process.env.port}`);
  } catch (error) {
    console.log(error);
  }
});
