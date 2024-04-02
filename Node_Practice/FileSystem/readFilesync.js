const fs = require("fs");

let content = fs.readFileSync("../package.json");

fs.writeFile("readFileSync.txt", content, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Sucessfully");
  }
});
