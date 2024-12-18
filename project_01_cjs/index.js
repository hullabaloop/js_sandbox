const Square = require('./square').Square;
const PI = require('./square').PI;

const square1 = new Square(9);
console.log(`Area = ${square1.area()}`);
console.log(`Length = ${square1.length()}`);

console.log(`PI = ${PI}`);