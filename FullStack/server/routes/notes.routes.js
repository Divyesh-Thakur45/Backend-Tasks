const express = require("express");
const {
  NotesCreate,
  NotesDelete,
  NotesGet,
  NotesOneGet,
  NotesUpdate,
  AdmineGet,
} = require("../controllers/notes.controller");
const upload = require("../middleware/multer");
const { isAuth } = require("../middleware/isAuth");

const NoteRoutes = express.Router();

// Notes Create
NoteRoutes.post("/create", NotesCreate);

// Notes Delete
NoteRoutes.delete("/delete/:id", NotesDelete);

// All Notes Get
NoteRoutes.get("/getNotes/:userId",isAuth , NotesGet);

// Single Notes Get
NoteRoutes.get("/getSingleNotes/:id", NotesOneGet);

// Notes Update
NoteRoutes.patch("/update/:noteId", upload.single("file"), NotesUpdate);

// Admine Get All Notes
NoteRoutes.get("/admine/:noteId", AdmineGet)
module.exports = { NoteRoutes };
