const http = require("http");
const server = http.createServer((req, res) => {
  let url = req.url;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html><head><title>Data Form</title></head>");
    res.write("<body><form action='/data'>");
    res.write("<input type='text' name='code'/><br>");
    res.write("<input type='text' name='product'/><br>");
    res.write("<button type='submit'>Submit</button>");
    res.write("</form>");
    res.write("<h3>" + req.url + "</h3>");
    res.write("</body></html>");
    return res.end();
  } else {
    res.setHeader("Content-Type", "text/html");
    res.write("<html><head><title>Data Form</title></head>");
    res.write("<body>");
    res.write("<h3>" + req.url + "</h3>");
    res.write("</body></html>");
    return res.end();
  }
});

server.listen(3000, (error, result) => {
  if (error) {
    console.log("Server is not running!");
  } else {
    console.log("Server is running...");
  }
});
