const http = require("http");
const server = http.createServer((req, res) => {
  let url = req.url;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html><head><title>Home Page</title></head>");
    res.write("<body><h1>Home page</h1>");
    res.write("<h2>" + req.url + "</h2>");
    res.write("</body></html>");
    return res.end();
  } else if (url === "/data") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html><head><title>JSON daa</title></head>");
    res.write("<body><h1>JSON data</h1>");
    res.write("<h2>" + req.url + "</h2>");
    res.write("</body></html>");
    res.end();
  }
});

server.listen(3000);
