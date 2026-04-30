const isUserLoggedIn = true;


if(isUserLoggedIn){
    console.log("User is logged in");
}






if(2 == "2"){
    console.log("2 is equal to 2"); // This will be printed because of type coercion
}


if(2 === "2"){
    console.log("2 is strictly equal to '2'"); // This will NOT be printed because the types are different
}






let temp = 40;
if(temp < 30){
    console.log("temp is less that 30")
}else{
    console.log("temp is greater than or equal to 30")
}






const balance = 1000;
if(balance > 500) console.log("balance is more than 500")   //implicit scope






const amount = 1000;



if(amount< 100) {
    console.log("greater than 100");
}else if(amount < 500){
    console.log("greater than 500");
}else if(amount < 750){
    console.log("greater than 750");
}else if(amount == 1000){
    console.log("amount is 1000");
}





const userLoggedIn = true;
const debitCard = true;
const loggedInWithGoogle = false;
const loggedInWithEmail = true;


if(userLoggedIn && debitCard && 2 == 3){
    console.log("You can make a purchase");
}


if(loggedInWithGoogle || loggedInWithEmail){
    console.log("User is logged in with Google or Email");
}






let month = "april"


switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case "march":
        console.log("March");
        break;
    case "april":
        console.log("April");
        break;
    default:
        console.log("might be some other month");
}