const fs = require("fs");
/*Folder With value ,use this code*/
fs.rmdir("./newFolder", { recursive: true }, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Successfully deleted the folder");
  }
});
