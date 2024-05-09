const express = require("express");
const cookiesParse = require("cookie-parser");
const app = express();

// use cookie-parser middleware
app.use(cookiesParse());

// set a cookie
app.get("/set-cookies", (req, res) => {
  res.cookie("name", "Anideep");
  res.send("Cookies are set!");
});

// get a cookie
app.get("/get-cookies", (req, res) => {
  const username = req.cookies.username;
  res.send(`The user name is: ${username}`);
});

//// delete a cookie
app.get("/delete-cookies", (req, res) => {
  res.clearCookie("username");
  res.send("Cookies cleared!");
});

app.listen(5000, () => {
  console.log("Server is running port 5000");
});
