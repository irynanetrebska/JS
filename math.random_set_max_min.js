function randomRange(myMin, myMax) {
  let mathRandomNumber = Math.random() * (myMax - myMin + 1) + myMin;
  return Math.floor(mathRandomNumber);
}

console.log(randomRange(0, 5));
