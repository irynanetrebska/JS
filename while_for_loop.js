const ourArray = [];
let i = 0;

while (i < 5) {
  ourArray.push(i);
  i++;
}
console.log(ourArray);


// Setup
const myArray = [];
let i = 5;
while (i >= 0) {
  myArray.push(i);
  i--;
}
// Only change code below this line
console.log(myArray);


const myArray = [];
for(let i = 1; i <= 5; i++) {
    myArray.push(i);
}
console.log(myArray);


const arr = [10, 9, 8, 7, 6];

for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}


// Setup
const myArr = [2, 3, 4, 5, 6];

// Only change code below this line
let total = 0;
for (let i = 0; i < myArr.length; i++) {
  total += myArr[i];
}

console.log(total);


const myArr = [2, 3, 4, 5, 6];
let total = 0;
for (let i = 0; i < myArr.length; i++) {
  total += myArr[i];
};
console.log(total);



const arr = [
  [1, 2], [3, 4], [5, 6]
];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
};


const ourArray = [];
let i = 0;

do {
  ourArray.push(i);
  i++;
} while (i < 5);
console.log(ourArray);


const ourArray = []; 
let i = 5;

while (i < 5) {
  ourArray.push(i);
  i++;
}
console.log(ourArray);


const myArray = [];
let i = 10;

// Only change code below this line
while (i < 5) {
  myArray.push(i);
  i++;
}
console.log(myArray);

do {
  myArray.push(i);
  i++
} while (i < 5);