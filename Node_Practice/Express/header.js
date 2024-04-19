const express = require("express");
const app = express();
const PORT = 3000;
const jsonData = {
  name: "Anideep",
  email: "anideep@gmail.com",
  Number: 99999999,
  Location: "Kolkata",
};
app.get("/", (req, res) => {
  res.send("<h1>Hello!world</h1>");
});

app.get("/res", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.write(JSON.stringify(jsonData));
  res.end();
});

app.listen(PORT, () => {
  console.log("Server is running.....");
});
