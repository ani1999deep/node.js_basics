process.on("beforeExit", () => {
  console.log("Before exit fired!");
});

process.on("exit", () => {
  console.log("exit event fired");
});
console.log("Process Started");
