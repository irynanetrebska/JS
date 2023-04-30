//GCD (greatest common divisor
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const ask = (question) =>
  new Promise((resolve) => rl.question(question, resolve));
 
function calculateGCD(num1, num2) {
  if (num2 == 0) {
    return num1;
  } else {
    return calculateGCD(num2, num1 % num2);
  }
}
 
async function main() {
  const num1 = Number(await ask("Enter the first positive integer value: "));
  const num2 = Number(await ask("Enter the second positive integer value: "));
 
  console.log(
    `The greatest common divisor of ${num1} and ${num2} is ${calculateGCD(
      num1,
      num2
    )}`
  );
 
  rl.close();
}
 
main();