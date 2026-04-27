const User = new Object();
console.log(User);


User.name = "John Doe";
console.log(User);


const User1= {
    email : "John@gmail.com",
    userfullname : {
        fullname : {
            firstName : "John",
            lastName : "Doe"
        }
    }
}


console.log(User1.userfullname?.fullname.firstName);





const obj1 = {1: 'a', 2: 'b'};
const obj2 = {3: 'c', 4: 'd'};


const mergedObj = {obj1, obj2};
console.log(mergedObj);


const correctlymergedObj = {...obj1, ...obj2};
console.log(correctlymergedObj);


const anotherMerged = Object.assign({}, obj1, obj2);       //this {} is optional but if it is not given the data of obj1 will enter obj2
console.log(anotherMerged);


const anotherUser = [
    {
    name: "John Doe",
    age: 30,
    location: "New York",
    isLoggedIn: false,
    email: "John@gmail.com"
    },
    {
    name: "Jane Doe",
    age: 25,
    location: "Los Angeles",
    isLoggedIn: true,
    // email: "Jane@gmail.com"
    }
]


console.log(anotherUser[0].email);
console.log(Object.keys(anotherUser[0]));
console.log(Object.values(anotherUser[1]));
console.log(Object.entries(anotherUser[0]));
console.log(anotherUser[0].hasOwnProperty("email"));