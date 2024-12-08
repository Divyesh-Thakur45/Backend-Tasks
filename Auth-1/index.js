const express = require("express");
const connect = require("./db");
const userControler = require("./Controlers/user.controler");
const app = express();

app.use(express.json());

app.use("/user", userControler);
app.listen(8080, async () => {
  try {
    await connect;
    console.log("Server is running on port 8080");
  } catch (error) {
    console.log(error);
  }
});
