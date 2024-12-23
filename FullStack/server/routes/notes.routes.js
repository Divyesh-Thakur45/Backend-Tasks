const express = require("express");
const { NotesCreate } = require("../controllers/notes.controller");

const NoteRoutes = express.Router();

NoteRoutes.post("/create", NotesCreate);

module.exports = { NoteRoutes };
