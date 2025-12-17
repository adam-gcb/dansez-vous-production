// La température en kelvin ne change pas
const V = 293; // Valeur en kelvin

// Conversion en Celsius
let celsius = V - 273;
console.log(celsius); // 20

// Conversion en Fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;
console.log(fahrenheit); // 68

// Arrondi à l'entier inférieur
fahrenheit = Math.floor(fahrenheit);//68

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
