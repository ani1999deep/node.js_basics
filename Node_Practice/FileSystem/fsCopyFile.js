const fs = require("fs");
fs.copyFile("./copyfile.txt", "./newcopyfile.txt", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Successful");
  }
});
