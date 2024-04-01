const fs = require("fs");
console.log(fs);
fs.stat("./node_modules", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
