// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

// Solution 1
function lookUpProfile(name, prop) {
  // Only change code below this line
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      if (contacts[i].hasOwnProperty(prop)) {
        return contacts[i][prop];
      } else return "No such property";
    }
  }
  return "No such contact";
  // Only change code above this line
}

console.log(lookUpProfile("Akira", "likes"));

/*
Your code worked; I am not sure exactly why but think it has something to do with what you said here: 
"Also you're returning for every case something the first iteration.. Even if the name is later on the 
array." What did you mean here? Because if the if statement failed, it was still returning something? 
But it would return something ultimately anyway, no? The only difference I see is the return is placed 
outside the for loop in the example you provided after "Let's try something". – 
Matt
 Jun 19, 2017 at 18:09 
Okay, so look the first function i wrote on this reply. When you iterate the list of contacts: 
You start with i=0. If the first contact have the good name, it work fine. But if the first contact 
haven't the right name, it automatically return the "No such contact". You never looking for others 
contacts (i=1, i=2, ..). So you have to look every contacts and return something only if you found the 
right contact, and you will go at the end of the funciton only when no contact are found with this name 
(so you return at the end the "No such contact") – 
Arthur
 Jun 19, 2017 at 18:13
 */

// Solution 2
function lookUpProfile(name, prop) {
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      if (prop in contacts[i]) {
        return contacts[i][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
}

// Solution 3
function lookUpProfile(name, prop) {
  let contact = null;
  // Try to find the right contact
  contacts.forEach((c) => {
    if (!contact && c && c.firstName && c.firstName == name) {
      contact = c;
    }
  });

  if (!contact) return "No such contact";
  return contact.hasOwnProperty(prop) ? contact[prop] : "No such property";
}
