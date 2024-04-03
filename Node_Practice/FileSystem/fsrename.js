const fs = require("fs");
fs.rename("fsfile.txt", "newfsfile.txt", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Succesuffly");
  }
});
