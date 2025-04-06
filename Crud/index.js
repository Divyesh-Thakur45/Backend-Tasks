const express = require("express");
const Connect = require("./config/db");
const NoteRoutes = require("./routes/notes.routes");
require("dotenv").config();

const app = express();

app.use(express.json());

app.use("/notes", NoteRoutes);

app.listen(process.env.port, async () => {
  try {
    await Connect;
    console.log("MongoDB connected successfully🎉");
    console.log(`listening on http://localhost:${process.env.port}`);
  } catch (error) {
    console.log(error);
  }
});
