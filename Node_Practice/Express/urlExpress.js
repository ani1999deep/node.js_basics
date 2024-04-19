const express = require("express");
const app = express();
const PORT = 3000;

// app.get("/", (req, res) => {
//   res.setHeader("Content-Type", "text/html");
//   res.write("<h1>This is URL</h1> ");
//   res.write(`URL:${req.url}`);
//   res.end();
// });

app.get("/user/:userId/:userName", (req, res) => {
  res.send(req.params);
});

app.listen(PORT, () => {
  console.log("Server is running....");
});
