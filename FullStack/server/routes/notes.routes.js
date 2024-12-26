const express = require("express");
const {
  NotesCreate,
  NotesDelete,
  NotesGet,
  NotesOneGet,
  NotesUpdate,
} = require("../controllers/notes.controller");
const upload = require("../middleware/multer");

const NoteRoutes = express.Router();

// Notes Create
NoteRoutes.post("/create", NotesCreate);

// Notes Delete
NoteRoutes.delete("/delete/:id", NotesDelete);

// All Notes Get
NoteRoutes.get("/getNotes/:id", NotesGet);

// Single Notes Get
NoteRoutes.get("/getNotes/:id", NotesOneGet);

// Notes Update
NoteRoutes.patch("/update/:noteId", upload.single("file"), NotesUpdate);
module.exports = { NoteRoutes };
