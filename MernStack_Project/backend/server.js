const express = require("express");
require("dotenv").config();
var cors = require("cors");
var cookieParser = require("cookie-parser");
const { connection } = require("./config/db");
const userRouter = require("./routes/user.routes");
const contactRouter = require("./routes/contact.routes");

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "http://localhost:5175",
    ],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true, // required for cookies and sessions
  })
);
app.use("/user", userRouter);
app.use("/contact", contactRouter);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log(`server is running on port ${process.env.PORT}`);
  } catch (error) {
    console.error(error);
  }
});
