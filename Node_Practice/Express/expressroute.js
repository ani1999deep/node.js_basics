const express = require("express");
const app = express();
const PORT = 3000;
//Define route
app.get("/", (req, res) => {
  console.log("Define Route");
  res.write("<h1>Hi!</h1>");
  res.end();
});
//Listen server
app.listen(PORT, () => {
  console.log("Server is running on port 3000");
});
