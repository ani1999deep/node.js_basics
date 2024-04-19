const express = require("express");
const app = express();

const middleware = (req, res, next) => {
  console.log("Middleware Called!");
  next();
};

app.use(middleware);

app.get("/", (req, res) => {
  console.log("Response sent");
  res.send("Response");
});

app.listen(3000, () => {
  console.log("Port is Running at 3000");
});
