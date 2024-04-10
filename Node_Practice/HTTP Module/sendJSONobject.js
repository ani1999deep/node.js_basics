const http = require("http");
//Create a simple JSON
const jsonData = {
  name: "Anideep",
  age: 30,
  city: "Kolkata",
};
//Create a json into string
const jsonString = JSON.stringify(jsonData);
//Define HTTP
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(jsonString);
});
server.listen(3000, () => {
  console.log("server is running in PORT : 3000");
});
