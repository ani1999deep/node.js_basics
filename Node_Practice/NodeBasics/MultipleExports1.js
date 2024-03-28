// const multipleFunObj = require("./MultipleExports");
// console.log(multipleFunObj.add(10, 12));
// console.log(multipleFunObj.subtra(15, 12));
// console.log(multipleFunObj.multiply(10, 12));
// console.log(multipleFunObj.divide(10, 5));

/*Another Way(STEP-2)*/
/*Destructuring*/
const { add, subtra, multiply, divide } = require("./MultipleExports");

console.log(add(10, 12));
console.log(subtra(15, 12));
console.log(multiply(10, 12));
console.log(divide(10, 5));
