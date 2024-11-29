const express = require("express");
const studentRoutes = require("./routes/studentRoute");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/api", studentRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
