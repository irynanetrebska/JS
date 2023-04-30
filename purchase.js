const readline = require("readline"); 
const rl = readline.createInterface({ 
  input: process.stdin, 
  output: process.stdout, 
}); 
const ask = (question) => 
  new Promise((resolve) => rl.question(question, resolve)); 
 
async function main() { 
  let purchasePrice = Number(await ask("Enter the purchase price: ")); 
  let discount = 0; 
 
  if (purchasePrice < 100) { 
    discount = 5; 
    purchasePrice *= 0.95; 
  } else if (purchasePrice > 200) { 
    discount = 15; 
    purchasePrice *= 0.85; 
  } else { 
    discount = 10; 
    purchasePrice *= 0.9; 
  } 
 
  console.log( 
    `Your discount is ${discount}%, the amount to be paid is ${purchasePrice}` 
  ); 
 
  rl.close(); 
} 
 
main(); 