const fs = require("fs");
const checkMethod = fs.existsSync(process.argv[0]);
console.log(checkMethod);
