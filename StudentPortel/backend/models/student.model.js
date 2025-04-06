const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
    default: "divu.png",
  },
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  stream: {
    type: String,
    required: true,
  },
  rank: {
    type: Number,
    required: true,
  },
  studentID: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    required: true,
    default: true,
  },
});

const studentModel = mongoose.model("StudentInfo", studentSchema);

module.exports = studentModel;
