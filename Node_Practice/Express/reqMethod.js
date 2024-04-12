const express = require("express");
const app = express();
const PORT = 3000;
app.get("/", (req, res) => {
  console.log(req.headers);
  console.log(req.protocol);
  console.log(req.ip);
});
app.listen(PORT, () => {
  console.log("Server is running");
});
