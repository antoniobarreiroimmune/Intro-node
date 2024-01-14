const factorial = require('./funciones/func');
const supervillains = require('supervillains');

for (let i = 0; i < 4; i++) {
    let randomNum = Math.floor(Math.random() * 5) + 1;
    let fact = factorial(randomNum);
    console.log(`Factorial de ${randomNum} es ${fact}. Supervillano correspondiente: ${supervillains.all[fact % supervillains.all.length]}`);
}