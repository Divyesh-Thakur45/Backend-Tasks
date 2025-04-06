const express = require("express");
const { createNote, DeleteNote, GetAllNotes, UpdateNotes } = require("../controllers/notes.controllers");

const NoteRoutes = express.Router();
NoteRoutes.post("/createnote", createNote);
NoteRoutes.delete("/deletenote/:id", DeleteNote);
NoteRoutes.get("/allnotes/:userId", GetAllNotes);
NoteRoutes.patch("/updatenote/:id", UpdateNotes)

module.exports = NoteRoutes;
