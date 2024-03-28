const add = (a, b) => {
  return a + b;
};

const subtra = (a, b) => {
  return a - b;
};

const multiply = (a, b) => {
  return a * b;
};

const divide = (a, b) => {
  return a / b;
};

/*Define Object*/

// const multipleFunObj = {
//   add: add,
//   subtra: subtra,
//   multiply: multiply,
//   divide: divide,
// };

/*Define Objects(ES6)(STEP-2)*/
const multipleFunObj = {
  add,
  subtra,
  multiply,
  divide,
};

module.exports = multipleFunObj;
