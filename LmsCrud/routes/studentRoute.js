const express = require("express");
const studentController = require("../controllers/studentController");

const router = express.Router();

// Routes
router.get("/students", studentController.getStudents);
router.post("/students/add", studentController.addStudent);
router.put("/students/update", studentController.updateStudent);
router.delete("/students", studentController.deleteStudent);

module.exports = router;
