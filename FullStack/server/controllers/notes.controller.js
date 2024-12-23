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
module.exports = { NotesCreate };
