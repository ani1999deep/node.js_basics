const express = require("express");
const app = express();
const PORT = 6969;

const userRoute = require("./User");
const commentsRoute = require("./Comments");

app.use("/user", userRoute);
app.use("/comments", commentsRoute);

app.listen(PORT, () => {
  console.log("Server is running");
});
