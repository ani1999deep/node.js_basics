const express = require("express");
const app = express();
const path = require("path");

// Serve static files from the 'public' directory
app.use(express.static("public"));

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
