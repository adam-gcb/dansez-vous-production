let myAge = 14; // Comment: myAge stores human years.
console.log(myAge);

// earlyYears starts at 2 and will be converted to dog years.
let earlyYears = 2;
earlyYears *= 10.5; // 2 years * 10.5 = 21 dog years for early years
console.log(earlyYears);

// laterYears account for the remaining years after the first two years.
let laterYears = myAge - 2; // remaining human years
console.log(laterYears);

laterYears *= 4; // each later year is 4 dog years
console.log(laterYears);

// Total dog years
let myAgeInDogYears = earlyYears + laterYears;
console.log(myAgeInDogYears);

// Normalize name to lowercase for consistent display
let myName = 'Adam'.toLowerCase(); // converts to 'adam'
console.log(myName);

// Optional: keep additional variables to demonstrate more tasks
let monNom = "Adam"; // Ton nom
let monAge = 14; // Ton âge en années humaines
let monAgeEnChien = monAge * 7; // Conversion utilitaire

console.log(`My name is ${monNom}. I am ${monAge} years old in human years, which is ${monAgeEnChien} years old in dog years.`);
