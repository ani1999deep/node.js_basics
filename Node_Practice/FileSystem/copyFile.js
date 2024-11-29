const fs = require("fs");
const source = "copyfile.txt";
const destination = "desFile.txt";

fs.copyFile(source, destination, (err) => {
  if (err) {
    console.log("Error is happend!");
  } else {
    console.log("Sucessful!");
  }
});
