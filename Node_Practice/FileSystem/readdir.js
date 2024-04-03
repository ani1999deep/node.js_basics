const fs = require("fs");

fs.readdir("../node_modules", (err, data) => {
  console.log(data);
});
