// singleton  // when we create an object with a constructor a singleton is created it means it is the only object of its kind through literals singletons are not created


// Object.create



// object literals


const mySym = Symbol("key1")


const JsUser = {
    name: "John",
    "full name": "John Doe",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "John@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}


console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])



JsUser.email = "John@yahoo.com"
console.log(JsUser.email);
 //Object.freeze(JsUser)       //so that the assigned value can't be changed
JsUser.email = "John@microsoft.com"
console.log(JsUser.email);


JsUser.greeting = function(){
    console.log("Hello JS user");
}



JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}


JsUser.greeting()
JsUser.greetingTwo()