let i = 1;
//Increment the value
function startCounter() {
  setInterval(() => {
    console.log(i);
    i++;
  }, 1000);
}
startCounter();
