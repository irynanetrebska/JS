const readline = require('readline'); 
const rl = readline.createInterface({ input: process.stdin, output: process.stdout }); 
 
rl.question('Enter your name: ', (name) => { 
    	rl.question('Enter your age: ', (age) => { 
        age = Number(age); 
 
        console.log(`Your name is ${name}. You are ${age} years old.`); 
 
        rl.close(); 
   }) 
})