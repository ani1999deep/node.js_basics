const express = require("express");
//Import Router
const router = express.Router();

router.get("/", (req, res) => {
  res.send({ data: "Here is your data" });
});

router.post("/", (req, res) => {
  res.send({ data: "Data is created" });
});

router.put("/", (req, res) => {
  res.send({ data: "Data is updated" });
});

router.delete("/", (req, res) => {
  res.send({ data: "Data is deleted" });
});

module.exports = router;
