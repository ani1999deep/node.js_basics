// const fs = require("fs");

// const path = process.argv[2];
// let content = fs.readFileSync(path);
// console.log(content);

const fs = require("fs");

const path = process.argv[2];

try {
  let content = fs.readFileSync(path, "utf8"); // Specify encoding to get content as a string
  console.log(content);
} catch (err) {
  console.error("Error reading file:", err);
}
