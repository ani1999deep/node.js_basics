const express = require("express");
const app = express();
const PORT = 3000;
const routes = require("./routeMiddleware");

app.use("/", routes);

app.get("/", (req, res) => {
  res.send("This is the Root Route");
});

app.listen(PORT, () => {
  console.log("Port is running");
});
