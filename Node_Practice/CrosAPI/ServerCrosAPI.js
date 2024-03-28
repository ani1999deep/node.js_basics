//Import required modules
const http = require("http");
//Define PORT number
const PORT = 4000;
//Sample of JSON data
const jsonData = {
  name: "Anideep",
  age: 30,
  email: "ani1@gmail.com",
};
//create an HTTP server
const server = http.createServer((req, res) => {
  //set CROS header
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept"
  );
  //Check the request method and url
  if (req.method === "GET" && req.url === "/data") {
    //Set response headers
    res.writeHead(200, { "Content-Type": "application/json" });
    //Send the JSON data as response
    res.end(JSON.stringify(jsonData));
  } else {
    //Handle Other routes
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

//Start the server
server.listen(PORT, () => {
  console.log("Server is running......");
});
