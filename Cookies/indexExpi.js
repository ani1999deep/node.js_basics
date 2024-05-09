const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

app.use(cookieParser());

app.get("/", (req, res) => {
  res.cookie("name", "expire with cookies", { maxAge: 10000 });
  res.send("cookie set");
});

app.get("/clear", (req, res) => {
  res.clearCookie("name");
  res.send("cookies are cleared");
});
app.listen(4000, () => {
  console.log("App is running on PORT 4000");
});
