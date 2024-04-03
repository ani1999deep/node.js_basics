const fs = require("fs");

fs.unlink("./newfsfile.txt", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Sucessfully deleted");
  }
});
