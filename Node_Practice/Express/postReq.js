const express = require("express");
const app = express();

app.use(express.urlencoded({ extented: true }));

app.post("/submit", (req, res) => {
  console.log("Req is theere", req.body);
  res.redirect("/");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(3000, (req, res) => {
  console.log("Server is running Port ");
});
