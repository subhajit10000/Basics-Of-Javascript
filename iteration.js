for (let i = 0; i < 10; i++) {
    console.log(i);
}






//for
let array = [1, 2, 3, 4, 5];



for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(element);
}






for(let i = 0; i < 10; i++) {
    const element = i;
    if(element == 5){
        console.log("5 is found");
    }
    console.log(element);
}





//break and continue


for (let i = 0; i < 10; i++) {
    const element = i;
    if(element == 5){
        console.log("5 is found");
        break; // Exit the loop when 5 is found
    }
    console.log(element);
}





for (let i = 0; i < 10; i++) {
    const element = i;
    if(element == 5){
        console.log("5 is found");
        continue; // Skip one iteration when 5 is found
    }
    console.log(element);
}