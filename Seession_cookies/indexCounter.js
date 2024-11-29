const express = require("express");
const app = express();

const session = require("express-session");
app.use(session({ secret: "my-secret-key-counter" }));

app.get("/", (req, res) => {
  if (req.session.user_visit) {
    req.session.user_visit++;
    res.send("Visited:" + req.session.user_visit + "times");
  } else {
    req.session.user_visit = 1;
    res.send("You are visited 1st time on this page");
  }
});

app.listen(4000, () => {
  console.log("Port is running..");
});
