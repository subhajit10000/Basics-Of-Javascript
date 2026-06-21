async function greet() {
    return "Hello, World!";
}

greet().then(message => console.log(message));  // Hello, World!



function delay(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

async function displayMessage() {
    console.log("Loading...");

    await delay(2000);

    console.log("Finished after 2 seconds!");  
// (wait 2 seconds)
// Finished after 2 seconds!
// }

displayMessage();   
