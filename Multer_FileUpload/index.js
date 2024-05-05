const express = require("express");
const multer = require("multer");
const app = express();
const PORT = 3000;

//Configure Multer
// The disk storage engine gives you full control on storing files to disk.
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Ensure this directory exists
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

// Routes
app.post("/upload", upload.single("file"), (req, res) => {
  // req.file is the `file` file
  if (req.file) {
    res.json({
      success: true,
      message: "File uploaded!",
      fileInfo: req.file,
    });
  } else {
    res.status(400).json({
      success: false,
      message: "No file uploaded.",
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
