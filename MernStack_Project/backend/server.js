const express = require("express");
require("dotenv").config();
const { connection } = require("./config/db");

const app = express();

app.use(express.json());

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log(`server is running on port ${process.env.PORT}`);
  } catch (error) {
    console.error(error);
  }
});
