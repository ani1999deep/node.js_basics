const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json([
    {
      id: 1,
      name: "deep Bhowmick",
      age: 29,
    },
    {
      id: 2,
      name: "Dipppxn Banerjee",
      age: 65,
    },
    {
      id: 3,
      name: "Canim Bhowmick",
      age: 26,
    },
  ]);
});

app.listen(5000, () => {
  console.log("App is running Port 5000");
});
