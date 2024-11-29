const fs = require("fs");
const content = "New data inserted in the file";
fs.appendFile("text1.txt", content, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Append Sucessfully");
  }
});
