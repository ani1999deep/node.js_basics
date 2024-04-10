const http = require("http");
const product = {
  pcode: 1001,
  product: "Apple",
};
const server = http.createServer((req, res) => {
  let url = req.url;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html><head><title>Home Page</title></head>");
    res.write("<body><h1>Home page</h1>");
    res.write("<h2>" + req.url + "</h2>");
    res.write("</body></html>");
    res.end();
  } else if (url === "/data") {
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify(product));
    res.end();
  }
});
server.listen(3000);
