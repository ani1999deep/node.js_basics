const http = require("http");
const server = http.createServer((req, res) => {
  console.log("Server Is running on PORT:3000");
  //   console.log(req);
  console.log(req.url);
  console.log(req.headers);
});
server.listen(3000);
