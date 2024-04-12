const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello!world</h1>");
});

app.get("/res", (req, res) => {
  res.write("<html>");
  res.write("<head><title>HTML Response</title></head>");
  res.write("<body>");
  res.write("<h1>Hello, world!</h1>");
  res.write("<p>This is a sample HTML response.</p>");
  res.write("</body>");
  res.write("</html>");
  res.end();
});

app.listen(PORT, () => {
  console.log("Server is running.....");
});
