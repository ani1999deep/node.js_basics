const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

app.use(cookieParser());

app.get("/", (req, res) => {
  console.log("Cookies:", req.cookies);
  res.cookie("name", "cookie-set-user").send("cookie-set");
});

app.listen(3000, () => {
  console.log("App is running..");
});
