function sayMyName(){
    console.log("John Doe"); 
}


sayMyName()



function addtwonumbers(num1, num2){
    console.log( num1 + num2);
}


// let total = addtwonumbers(5, 10)
// console.log(total);





function addtwonumbers(num1, num2){
    let result = num1 + num2;
    return result;
    // return num1 + num2;
}




let total = addtwonumbers(10, 10)
console.log(total);



// console.log(addtwonumbers(5, 10));




function loggedInUserMessage(username){
    return `Welcome back, ${username}!`;
}




console.log(loggedInUserMessage("John Doe"));
console.log(loggedInUserMessage(""));
console.log(loggedInUserMessage());
console.log(loggedInUserMessage);





function newloggedInUserMessage(username){
    if(!username){
        return "enter a valid username";
    }
    return `Welcome back, ${username}!`;
}


console.log(newloggedInUserMessage("John Doe"));
console.log(newloggedInUserMessage(""));
console.log(newloggedInUserMessage());
console.log(newloggedInUserMessage);




function calculateCartPrice( val1, val2, ...num){
    return num
}


console.log(calculateCartPrice(100, 200, 300, 400,500));




const user = {
    username: "John Doe",
    email: "John@gmail.com"
}



function handleObject(obj){
    console.log(`username: ${obj.username}, email: ${obj.email}`);
}


handleObject(user);



handleObject({
    username: "Jane Doe",
    email: "Jane@gmail.com"
})



const newArr = [200, 400, 600, 100];
const arr = [1,2,3,4,5];


function retursecondvalue(arr){
    return arr[1];
}


console.log(retursecondvalue(newArr));
console.log(retursecondvalue(arr));