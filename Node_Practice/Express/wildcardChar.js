const express = require("express");
const app = express();
const PORT = 3000;
//Define route
app.get("/", (req, res) => {
  console.log("Define Route");
  res.write("<h1>Hi!</h1>");
  res.end();
});

//Define route
app.get("/products?", (req, res) => {
  console.log("Define Route in product");
  res.write("<h1>Hi!</h1>");
  res.end();
});

//Define route
app.get("/product-0+1", (req, res) => {
  console.log("Define Route in product");
  res.write("<h1>Hi!</h1>");
  res.end();
});
//Define route
app.get("/product*-01", (req, res) => {
  console.log("Define Route in product");
  res.write("<h1>Hi!</h1>");
  res.end();
});
//Listen server
app.listen(PORT, () => {
  console.log("Server is running on port 3000");
});
