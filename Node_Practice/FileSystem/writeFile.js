const fs = require("fs");
fs.writeFile("readFile.txt", "Hi! i am here to create the concept", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File is succesfully updated");
  }
});
