

const email = "John@gmail.com"


if(email){
    console.log("email is available");
}else{
    console.log("email is not available");
}






const password = ""


if(password){
    console.log("password is available");
}else{
    console.log("password is not available");
}






const booksPurschased = [];


if(booksPurschased){
    console.log("true");
}else{
    console.log("false");
}





//falsy values


//false 0, -0, 0n, "", null, undefined, NaN, BigInt



//truthy values
//true, {}, [], " ", "0", "false", 1, -1, 0.1, -0.1, Infinity, -Infinity, BigInt(1), function(){}, Symbol("symbol"), new Boolean(false), new Number(0), new String("")



let num  = new Number(0);
let num2 = 0;



console.log(typeof num);
console.log(typeof num2);



if (num === num2) {
    console.log("text 1");
} else {
    console.log("text 2");
}






if(booksPurschased.length < 0){
    console.log("books are purchased");
}else{
    console.log("books are not purchased");
}





const obj ={}


if(Object.keys(obj).length < 0){
    console.log("object is not empty");
}
else{
    console.log("object is empty");
}






//nullish coalescing operator



const res = 1 || 10;
console.log(res); // Output: 1 because 1 is truthy



const userInput = null;
const defaultValue = "Default Value";


const result = userInput ?? defaultValue;
console.log(result); // ?? returns the right-hand value only if the left-hand value is null or undefined





//ternary operator


const price  = 100;
//condition ? true value : false value
let discount = price > 50 ? 10 : 5;
console.log(discount);
let newprice = price - discount;
console.log(newprice); // Output: 90 because price is greater than 50
