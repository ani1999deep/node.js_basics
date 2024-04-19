const express = require("express");
const app = express();
const PORT = 3000;

app.post("/data", (req, res) => {
  res.send("Sending the post");
});

const listenFunction = (err) => {
  if (err) {
    console.log("Error is happen");
  } else {
    console.log("Sucessfully!");
  }
};

app.listen(PORT, listenFunction);
