const express = require("express");
const app = express();

const session = require("express-session");
app.use(session({ secret: "my-se" }));

app.get("/", (req, res) => {
  req.session.username = "Anideep";
  res.send("Sessions are set!");
});

app.get("/get-session", (req, res) => {
  res.send("Your user name is: " + req.session.username);
});

app.listen(3000, () => {
  console.log("Port is running..");
});
