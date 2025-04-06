const studentModel = require("../models/student.model");

const createStudent = async (req, res) => {
  const { name, age, stream, rank } = req.body;
  if (!name || !age || !stream || !rank) {
    return res.status(400).json({ message: "All fields are required" });
  }
  const isExist = await studentModel.findOne({ name });
  if (isExist) {
    return res.status(400).json({ message: "Student already exists" });
  } else {
    await studentModel.create({
      name,
      age,
      stream,
      rank,
      studentID: req.user._id,
    });
    res.status(201).json({ message: "Student created successfully" });
  }
};

// Get all Student ( using Find it return array of objects)
const getallStudent = async (req, res) => {
  console.log(req.params.stdid);
  const { stdid } = req.params;
  if (!stdid) {
    return res.status(400).json({ message: "Student is not exist" });
  } else {
    const studentData = await studentModel.find({ studentID: stdid });
    if (studentData.length > 0) {
      res.status(200).json(studentData);
    } else {
      res.status(404).json({ message: "No student found" });
    }
  }
};

// Get single Student ( using FindOne it return one objects)
const getOneStudent = async (req, res) => {
  const { stdid } = req.params;
  if (!stdid) {
    return res.status(400).json({ message: "Student is not exist" });
  } else {
    const studentData = await studentModel.findOne({ studentID: stdid });
    return res.status(200).json(studentData);
  }
};

// delete a single Student
const deleteStudent = async (req, res) => {
  const { id } = req.params;
  const isStudent = await studentModel.findOne({ _id: id });
  if (!isStudent) {
    return res.status(400).json({ message: "Student is not exist" });
  } else {
    await studentModel.findByIdAndDelete(isStudent);
    res.status(200).json({ message: "Student deleted successfully" });
  }
};

// update students
const updateStudent = async (req, res) => {
  const { id } = req.params;
  const isExist = await studentModel.findOne({ _id: id });
  if (!isExist) {
    return res.status(400).json({ message: "Student not found" });
  }
  await studentModel.findByIdAndUpdate(isExist);
  res.status(200).json({ message: "Student updated successfully" });
};
module.exports = {
  createStudent,
  getallStudent,
  getOneStudent,
  deleteStudent,
  updateStudent,
};
