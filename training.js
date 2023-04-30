function animalYear(year) {
    let remainder = year%12
    switch (remainder) {
        case 0:
            console.log(`${year} is the year of Monkey`);
            break;
        case 1:
            console.log(`${year} is the year of Rooster`);
            break;
        case 2:
            console.log(`${year} is the year of Dog`);
            break;
        case 3:
            console.log(`${year} is the year of Pig`);
            break;
        case 4:
            console.log(`${year} is the year of Rat`);
            break;
        case 5:
            console.log(`${year} is the year of Ox`);
            break;
        case 6: 
            console.log(`${year} is the year of Tiger`);
            break;
        case 7:
            console.log(`${year} is the year of Rabbit`);
            break;
        case 8:
            console.log(`${year} is the year of Dragon`);
            break;
        case 9:
            console.log(`${year} is the year of Snake`);
            break;
        case 10:
            console.log(`${year} is the year of Horse`);
            break;
        case 11:
            console.log(`${year} is the year of Goat`);
            break;
    }
};

animalYear(1999);

function traffic(miles, time=0.5) {
    let speed = miles/time
    if (speed > 45) {
        console.log(`Your speed is ${speed}. Slow down, driver!`)
    } else if (speed <= 45 && speed > 0) {
        console.log(`Your speed is ${speed}. Thank you for respecting the speed limit!`)
    } else if (speed == 0) {
        console.log('You are not moving, driver!');
    } else {
        console.log('The distance value is not valid');
    }
};
traffic(24);



function purchase(cost) {
    if (cost >= 0 && cost < 100) {
        console.log(`Your discount is 5%. Your total amount is ${cost*0.95} euros`);
    } else if (cost >= 100 && cost < 200) {
        console.log (`Your discount is 10%. Your total amount is ${cost*0.9} euros`);
    } else if (cost >= 200) {
        console.log(`Your discount is 15%. Your total amount is ${cost*0.85} euros`);
    } else {
        console.log('Enter a valid number')
    }
} 

purchase(202);

let str =
  "Some people want to change the world! \n" +
  "They think it's their own. \n" +
  "They seem to be so cute and bold, \n" +
  "They're pleased to be well known. \n";
 
console.log(`Old string ${str}`);
console.log(`The actual length of the string is: ${str.length}`);
 
const wordToUpperCase = "canvas";
 
if (str.includes(wordToUpperCase)) {
  console.log(wordToUpperCase.toUpperCase());
} else {
  console.log(`String doesn't contain the word \"${wordToUpperCase}\"`);
}
 
str = str.replace("Some people", "We");
console.log(`New string:\n${str}`);