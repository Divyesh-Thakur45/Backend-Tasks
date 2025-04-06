const NoteModel = require("../models/note.model");

// Create Notes
const createNote = async (req, res) => {
  const { image, title, price, userId } = req.body;
  try {
    if (!title && !description) {
      res.status(404).json({ message: "Please enter a title and description" });
    } else {
      const NotesData = await NoteModel.create({ image, title, price, userId });
      console.log(NotesData);
      res.status(201).json({ message: "Note created successfully" });
      console.log("Note created successfully");
    }
  } catch (error) {
    console.log(error);
  }
};

// Delete Note
const DeleteNote = async (req, res) => {
  const { id } = req.params;
  try {
    const isDelete = await NoteModel.findByIdAndDelete(id);
    if (!isDelete) {
      res.status(404).json({ message: "note not found" });
    } else {
      res.status(200).json({ message: "note deleted successfully" });
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
    console.log(error);
  }
};

// get all notes
const GetAllNotes = async (req, res) => {
  const { userId } = req.params;
  try {
    const isValideId = await NoteModel.find({ userId: userId });
    console.log(isValideId);
  } catch (error) {
    res.status(404).json({ message: error.message });
    console.log(error);
  }
  console.log(userId);
  res.send("ok");
};

// UpdateNotes
const UpdateNotes = async (req, res) => {
  const { id } = req.params;
  try {
    const isUpdate = await NoteModel.findByIdAndUpdate(id, req.body);
    if (!isUpdate) {
      res.status(404).json({ message: "note not found" });
    } else {
      res.status(200).json({ message: "note updated successfully" });
      console.log("note updated successfully");
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
  res.send("ok");
};
module.exports = { createNote, DeleteNote, GetAllNotes, UpdateNotes };
