const express = require("express");
const app = express();
const path = require("path");

app.get("/download-index", (req, res) => {
  const filePath = path.join(__dirname, "index.html");
  res.sendFile(filePath);
});

app.listen(3000, (req, res) => {
  console.log("Server is running");
});
