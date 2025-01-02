const { NotesModel } = require("../models/notes.model");

const NotesCreate = async (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).send({ message: "All fields are required" });
  }
  try {
    await NotesModel.create({ title, description, userId: req.user._id });
    return res
      .status(200)
      .send({ message: "Your notes were created successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Server error" });
  }
};

const NotesDelete = async (req, res) => {
  const { id } = req.params;
  const isDelete = await NotesModel.findById(id);
  console.log(isDelete._id != isDelete.userId)
  // res.status(200).send({ message: "ok" });
  if (!isDelete) {
    return res.status(404).send({ message: "Note not found" });
  }
  // if (isDelete.userId != isDelete._id) {
  //   return res
  //     .status(403)
  //     .send({ message: "You are not authorized to delete this note" });
  // }
  await NotesModel.findByIdAndDelete(isDelete);
  return res.status(200).send({ message: "Note deleted successfully" });
};

const NotesGet = async (req, res) => {
  const { userId } = req.params; // Extract the ID from request parameters
  console.log(userId);
  try {
    const notes = await NotesModel.find({ userId: userId });
    console.log(notes)
    console.log(notes.length > 0);
    if (notes.length > 0) {
      return res.status(200).send({ message: "get All Notes", notes });
    }
  } catch (error) {
    console.error("Error fetching notes:", error);
    return res.status(500).send({ message: "Internal server error" });
  }
};

const NotesOneGet = async (req, res) => {
  const { id } = req.params;

  const isValide = await NotesModel.findById(id);
  console.log(isValide);

  try {
    if (!isValide) {
      return res.status(404).send({ message: "User not found" });
    }
    const idOfUser = isValide._id;
    const obj = await NotesModel.findOne({ _id: idOfUser });
    console.log(obj);
    res.send(obj);
  } catch (error) {
    console.log(error);
    return res.status(404).send({ message: error });
  }
};

const NotesUpdate = async (req, res) => {
  const { noteId } = req.params;
  try {
    const isFind = await NotesModel.findById(noteId);
    console.log(isFind);
    if (!isFind) {
      return res.status(404).send({ message: "Note not found" });
    }
    if (req.file) {
      await NotesModel.findByIdAndUpdate(noteId, {
        ...req.file,
        Image: req.file.originalname,
      });
      return res.status(200).send({ message: "Image uploaded successfully" });
    } else {
      await NotesModel.findByIdAndUpdate(noteId, req.body);
      return res.status(200).send({ message: "Note updated successfully" });
    }
  } catch (error) {
    res.status(404).send({ message: "User not found" });
    console.log(error);
  }
  res.send("ohk");
};

// Admin interface
const AdmineGet = async (req, res) => {
  const { noteId } = req.params;
  const isAdmine = await NotesModel.findById(noteId);
  try {
    if (!isAdmine) {
      return res.status(404).send({ message: "Note not found" });
    }
    if (req.user.role === "admin") {
      console.log("Admin");
      // const notes = await NotesModel.find({noteId});
      // console.log(notes);
      // return res.status(200).send({ message: "Note updated successfully" });
    }
    console.log("Out Of condition");
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: "Server error" });
  }
};

module.exports = {
  NotesCreate,
  NotesDelete,
  NotesGet,
  NotesOneGet,
  NotesUpdate,
  AdmineGet,
};
