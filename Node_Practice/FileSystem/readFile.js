const fs = require("fs");
fs.readFile("readFile.txt", (err, data) => {
  //   console.log(data); //Output: Buffer

  console.log(data.toString());
});
