const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    let body = "";

    req.on("data", (buffer) => {
      body += buffer.toString();
    });

    req.on("end", () => {
      let postData = {};
      try {
        postData = JSON.parse(body);
      } catch (error) {
        res.end("Invalid JSON ");
        return;
      }

      const filePath = path.join(__dirname, "data.json");

      let existingData = {};
      if (fs.existsSync(filePath)) {
        const data = fs.readFileSync(filePath, "utf8");
        try {
          existingData = JSON.parse(data);
        } catch (error) {
          console.error("Failed to parse", error);
        }
      }
      const updatedData = { ...existingData, ...postData };

      fs.writeFileSync(filePath, JSON.stringify(updatedData, null, 2));
      res.end(
        JSON.stringify({
          message: "Data received and updated successfully",
          data: updatedData,
        })
      );
    });
  } else {
    res.end("Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
