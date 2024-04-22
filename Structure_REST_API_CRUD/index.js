const express = require("express");
const router = require("./routes/customers");
const app = express();

app.use("/", router);

//Port define
const server = app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
