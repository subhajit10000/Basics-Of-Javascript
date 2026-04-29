//forof loop


let arr = [1,22,3,42]


for(const i of arr){
    console.log(i);
}






const greeting = "hello"


for (const greet of greeting) {
    console.log(greet);
}







const map = new Map()
map.set("IN", "India")
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("FR", "France")


console.log(map);


for (const key of map) {
    console.log(key);
}


for (const [key, val] of map) {      //destructured
    console.log(key);
    console.log(val);
}








//for in loop


const obj = {
    name: "John Doe",
    email: "John@gmail.com"
}


// for (const [key, val] of obj) {   //not iteratable for objects
//     console.log(val);
// }



for (const key in obj) {
    console.log(`${key} is ${obj[key]}`)
}


for (const key in arr) {
    console.log(`for index ${key} the value is ${arr[key]}`)
}









const newArr = [1,2,3,4,5,6,7,8,9,10]


newArr.forEach(function (element){
    console.log(element);
})





arr.forEach( function (val) {
    console.log(val);
});




newArr.forEach((element) => {
    console.log(element);
});





function printMe(item){
    console.log(item);
}


arr.forEach(printMe)






arr.forEach((item, index, arr) => {
    console.log(item);
    console.log(index);
    console.log(arr);
    
})




const User = [
    {
        name: "John Doe",
        email: "John@gmail.com"
    },
    {
        name: "Jane Doe",
        email: "Jane@gmail.com"
    }
]


User.forEach((item,index) => {
    console.log(index);
    console.log(item.name);
})