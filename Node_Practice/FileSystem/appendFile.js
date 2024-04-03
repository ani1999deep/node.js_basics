const fs = require("fs");
const content = "New data inserted";
fs.appendFile("text.txt", content, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Append Sucessfully");
  }
});
