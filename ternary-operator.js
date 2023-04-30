function checkEqual(a, b) {
  return a === b ? "Equal" : "Not Equal";
  /*
  if (a === b) {
    return "Equal"
  } else return "Not Equal"
  */
}

console.log(checkEqual(1, 2));

function checkSign(num) {
  return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
  /*
  if (num > 0) {
    return "positive";
  } else if (num < 0) {
    return "negative";
  } else return "zero";
  */
}

console.log(checkSign(10));
