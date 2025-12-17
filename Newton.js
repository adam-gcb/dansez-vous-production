const celsius = 273; //valeur en celsius

//convertion en Newton
let Newton = celsius * (33 / 100);
console.log(Newton);//90.09

// Arrondi à l'entier inférieur
Newton = Math.floor(Newton);//90
console.log(`The temperature is ${Newton} degrees Newton.
`);