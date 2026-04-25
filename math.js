const num = 400;  //automatically detects the type
console.log(num);


const balance = new Number(100); // when we explicitly want to mention the type
console.log(balance);
console.log(balance.toString().length);



const decinum = 0.123456789;
console.log(decinum.toFixed(2)); //rounds the number to the specified number of decimal places and returns a string representation of the result
console.log(decinum.toPrecision(4)); //formats the number to the specified length and returns a string representation of the result



const hundreds = 10000000000000;
console.log(hundreds.toLocaleString("en-IN"));



// Maths


console.log(Math);



console.log(Math.abs(-4)); //returns the absolute value of a number
console.log(Math.round(4.5)); //rounds a number to the nearest integer
console.log(Math.ceil(4.2)); //returns the smallest integer greater than or equal to a number
console.log(Math.floor(4.7)); //returns the largest integer less than or equal to a number
console.log(Math.min(4, 5, 6, 7, 8)); //returns the smallest value among the given numbers
console.log(Math.max(4, 5, 6, 7, 8)); //returns the largest value among the given numbers


console.log(Math.random()); //returns a random number between 0 (inclusive) and 1 (exclusive)
console.log((Math.random() * 10) + 1); //returns a random "number" between 1 (inclusive) and 10 (exclusive)
console.log(Math.floor(Math.random() * 10) + 1); //returns a random "integer" between 1 (inclusive) and 10 (exclusive)



const min = 10;
const max  =  20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); //returns a random "integer" between min (inclusive) and max (inclusive)