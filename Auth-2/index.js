const express = require("express");
const connect = require("./db");
const userRouter = require("./controls/user.control");
const cookieParser = require("cookie-parser");

const app = express();

app.use(cookieParser());
app.use(express.json());

app.use("/user", userRouter);
app.listen(8080, async () => {
  try {
    await connect;
    console.log("Server is running on port 8080");
  } catch (error) {
    console.log(error);
  }
});
