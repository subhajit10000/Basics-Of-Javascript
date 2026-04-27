const user = {
    name : "John Doe",
    isRegistered : true,
    price: 999,
    welcomeMessage : function(){
        console.log("Welcome " + this.name);
    }
}


user.welcomeMessage();
user.name = "Jane Doe";
user.welcomeMessage();


console.log(this);




function someFunc (){
    console.log(this);
    let username = "johndoe";
    console.log(this.username);
}
someFunc();




const someFunction = () => {
    let username = "jane doe";
    console.log(username);
}
someFunction();






const addTwo = (num1, num2) => {
    return num1 + num2;
    console.log(this);
}


console.log(addTwo(1,2));




const addmore = (num1, num2) => (num1 + num2)


console.log(addmore(1,1));




const obj = () => ({name: "John Doe"});


console.log(obj())
