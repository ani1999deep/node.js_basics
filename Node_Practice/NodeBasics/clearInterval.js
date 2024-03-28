let a = 1;

function setTimeCounter() {
  timerObj = setInterval(() => {
    if (a < 10) {
      console.log(a);
      a += 2;
    } else {
      clearInterval(timerObj);
    }
  }, 1000);
}
setTimeCounter();
