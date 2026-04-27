// const a = 10
// let b = 20
// var c = 30


if (true) {
    const a = 100
    let b = 200
    var c = 300
}


console.log(a);
console.log(b);
console.log(c);




//You can access variables inside a scope that are declared globally, but should not be other way round




let a = 10;


if (true) {
    let a = 20;
    console.log("inner " + a);
}


console.log("outer " + a);




function outer() {
    const name = "John Doe";
    function inner() {
        const website = "www.johndoe.com";
        console.log(name);
    }
    console.log(website);


    inner();


}

outer();






if (true) {
    const username = "johndoe";
    if (true) {
        const website = "www.johndoe.com";
        console.log(username + " " + website);
    }
    console.log(website);
}
console.log(username);







console.log(addOne(1))


function addOne(num) {
    return num + 1;
}







const addTwo = function (num) {
    return num + 2;
}
console.log(addTwo(1))






console.log(x);
console.log(y);
console.log(z);



const x = 10
let y = 20
var z = 30