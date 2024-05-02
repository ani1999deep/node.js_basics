const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 9000;

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.static("./public"));

// MongoDB Connection
const mongodbURL = "mongodb://127.0.0.1:27017/crudmongoosedb";
mongoose
  .connect(mongodbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("**** MongoDB Connected ****"))
  .catch((error) => console.error("MongoDB Connection Error:", error));

// Schema and Model
const studentSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  gender: { type: String, required: true },
  ip_address: { type: String, required: true },
});

const Student = mongoose.model("Student", studentSchema);

// Routes
app.get("/", (req, res) => {
  res.send("Hello, welcome to the Students API!");
});

// CRUD Operations
// GET all students
app.get("/students", async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// GET student by ID
app.get("/students/id/:id", async (req, res) => {
  try {
    const student = await Student.findOne({ id: Number(req.params.id) });
    if (student) {
      res.json(student);
    } else {
      res.status(404).send("Student not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// POST new student
app.post("/new/students", async (req, res) => {
  try {
    const newStudent = new Student(req.body);
    await newStudent.save();
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// PUT update a student
app.put("/students/:id", async (req, res) => {
  try {
    const updatedStudent = await Student.findOneAndUpdate(
      { id: Number(req.params.id) },
      { $set: req.body },
      { new: true }
    );
    if (updatedStudent) {
      res.json(updatedStudent);
    } else {
      res.status(404).send("Student not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// DELETE a student
app.delete("/students/:id", async (req, res) => {
  try {
    const result = await Student.findOneAndDelete({
      id: Number(req.params.id),
    });
    if (result) {
      res.send("Student deleted");
    } else {
      res.status(404).send("Student not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Listening to the server
app.listen(PORT, () => {
  console.log(`Server running on http://127.0.0.1:${PORT}`);
});
