const express = require("express");
const connect = require("./config/db");
const { userRoutes } = require("./routes/user.routes");
const env = require("dotenv").config();
const app = express();

app.use(express.json());

app.use("/user", userRoutes);

app.listen(process.env.PORT || 3000, async () => {
  try {
    await connect;
    console.log(`Server is running on port ${process.env.PORT}`);
  } catch (error) {
    console.log(error);
  }
});
