/*Check the directory*/
// const fs = require("fs");
// const dirpath = process.argv;
// console.log(dirpath);

/*Take a directory from user,dealing with commandline*/
const fs = require("fs");
const dirPath = process.argv[2];
fs.readdir(dirPath, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
    console.log("File/Folder ->" + data.length);
  }
});
