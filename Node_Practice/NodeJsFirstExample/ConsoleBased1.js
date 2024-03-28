const readline = require("readline");
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
r1.question("What is your name?", (name) => {
  console.log(`Hello!${name}`);
  r1.close();
});
