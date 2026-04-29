
let name = "John";
let age = 20;


console.log("My name is " + name + " and I am " + age + " years old.");
console.log(`My name is ${name} and I am ${age} years old.`); //template literals




const gameName = new String("Chess");
console.log(typeof gameName);



console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(0));
console.log(gameName.indexOf("e"));





const newstr = gameName.substring(0, 4);
console.log(newstr);


const str = gameName.slice(0, 4); //negative values can be used to slice from the end of the string
console.log(str);


const trimedstr = "   Hello World!   ".trim();
console.log(trimedstr);


const str2 = "Hello everyone in the World!";
console.log(str2.split(" ")); //split the string into an array of substrings based on the specified separator