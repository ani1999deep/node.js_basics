//Import the module
const express = require("express");
const app = express();
const port = 3000;
//Define the Route
app.get("/", (req, res) => {
  res.send("Hi! I am a Node.js Developer");
});
//Start the Server
app.listen(port, () => {
  console.log("Server is running on port 3000");
});
