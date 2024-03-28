firstTimer = setTimeout(() => {
  console.log("Time out");
}, 3000);
console.log("Time In");

//clear timer
const clearTimer = () => {
  clearTimeout(firstTimer);
  console.log("Timer cleared");
};

clearTimer();
