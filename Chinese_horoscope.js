const readline = require("readline"); 
const rl = readline.createInterface({ 
  input: process.stdin, 
  output: process.stdout, 
}); 
const ask = (question) => 
  new Promise((resolve) => rl.question(question, resolve)); 
 
async function main() { 
  let year = await ask("Enter the year (positive value and less than 10000) \n"); 
  year = Number(year); 
 
  while (true) { 
    if (year <= 0 || year > 10000) { 
      year = await ask("Enter correct value\n"); 
      year = Number(year); 
    } else { 
      break; 
    } 
  } 
 
  const k = year % 12; 
  switch (k) { 
    case 11: 
      console.log(`${year} - The year of the Goat`); 
      break; 
    case 10: 
      console.log(`${year} - The year of the Horse`); 
      break; 
    case 9: 
      console.log(`${year} - The year of the Snake`); 
      break; 
    case 8: 
      console.log(`${year} - The year of the Dragon`); 
      break; 
    case 7: 
      console.log(`${year} - The year of the Rabbit`); 
      break; 
    case 6: 
      console.log(`${year} - The year of the Tiger`); 
      break; 
    case 5: 
      console.log(`${year} - The year of the Ox`); 
      break; 
    case 4: 
      console.log(`${year} - The year of the Rat`); 
      break; 
    case 3: 
      console.log(`${year} - The year of the Pig`); 
      break; 
    case 2: 
      console.log(`${year} - The year of the Dog`); 
      break; 
    case 1: 
      console.log(`${year} - The year of the Rooster`); 
      break; 
    case 0: 
      console.log(`${year} - The year of the Monkey`); 
      break; 
  } 
  rl.close()
} 

main();