const express = require("express");
const app = express();

//Route handler
app.get("/current-date&time", (req, res) => {
  const currentDateTime = new Date();
  const formattedDateTime = currentDateTime.toLocaleString("en-IN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
  res.send(formattedDateTime);
});
//Port define
app.listen(3000, () => {
  console.log("Server is running ");
});
