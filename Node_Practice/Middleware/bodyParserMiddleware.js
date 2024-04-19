const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

// Middleware to parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Serve index.html when accessing the root URL
app.get("/", (req, res) => {
  const filePath = path.join(__dirname, "index.html");
  res.sendFile(filePath);
});

// Endpoint to handle POST requests to /saveData
app.post("/saveData", (req, res) => {
  const receivedData = req.body; // Get all data received in the request body
  console.log("Using Body-parser: ", receivedData); // Log the received data
  res.send(
    `Data received successfully! Received data: ${JSON.stringify(receivedData)}`
  );
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
