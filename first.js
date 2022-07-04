console.log(1);
console.log(2);
setTimeout(() => {
  console.log("callback function was fired after 10000");
}, 10000); //first example of async code was fired after 10seconds started first and finished after 10seconds
console.log(3);
console.log(4);
