const fs = require("fs");
const path = require("path");

const filePath = path.resolve(__dirname, "../data/students.json");

const readStudentsFile = () => {
  try {
    const data = fs.readFileSync(filePath, "utf8");
    return JSON.parse(data) || [];
  } catch (err) {
    console.error("Error reading file:", err);
    return [];
  }
};

const writeStudentsFile = (data) => {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  } catch (err) {
    console.error("Error writing file:", err);
  }
};

exports.getStudents = (req, res) => {
  const students = readStudentsFile();
  res.json(students);
};

exports.addStudent = (req, res) => {
  const { id, name, Dept } = req.body;

  if (!id || !name || !Dept) {
    return res
      .status(400)
      .json({ error: "All fields (id, name, Dept) are required!" });
  }

  const students = readStudentsFile();
  const newStudent = { id, name, Dept };
  students.push(newStudent);
  writeStudentsFile(students);

  res
    .status(201)
    .json({ message: "Student added successfully", student: newStudent });
};

exports.updateStudent = (req, res) => {
  const { id, name, Dept } = req.body;

  if (!id) {
    return res
      .status(400)
      .json({ error: "Student ID is required for updating!" });
  }

  const students = readStudentsFile();
  const index = students.findIndex((student) => student.id === id);

  if (index === -1) {
    return res.status(404).json({ error: `Student with ID ${id} not found!` });
  }

  if (name) students[index].name = name;
  if (Dept) students[index].Dept = Dept;

  writeStudentsFile(students);

  res.status(200).json({
    message: "Student updated successfully",
    student: students[index],
  });
};

exports.deleteStudent = (req, res) => {
  const { id } = req.body;

  if (!id) {
    return res
      .status(400)
      .json({ error: "Student ID is required for deletion!" });
  }

  const students = readStudentsFile();
  const filteredStudents = students.filter((student) => student.id !== id);

  if (students.length === filteredStudents.length) {
    return res.status(404).json({ error: `Student with ID ${id} not found!` });
  }

  writeStudentsFile(filteredStudents);

  res.status(200).json({
    message: "Student deleted successfully",
    students: filteredStudents,
  });
};
