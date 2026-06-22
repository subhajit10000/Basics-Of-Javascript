// Basic Promise Example

const myPromise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Promise resolved successfully!");
    } else {
        reject("Promise rejected!");
    }
});

myPromise
    .then(result => console.log(result))
    .catch(error => console.log(error));


// Promise with setTimeout

const delay = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Data loaded after 3 seconds");
    }, 3000);
});

delay.then(data => console.log(data));


// Promise Returning Random Success or Failure

const checkNumber = new Promise((resolve, reject) => {
    const number = Math.random();

    if (number > 0.5) {
        resolve(`Success! Number is ${number}`);
    } else {
        reject(`Failed! Number is ${number}`);
    }
});

checkNumber
    .then(result => console.log(result))
    .catch(error => console.log(error));


// Promise with Function

function divide(a, b) {
    return new Promise((resolve, reject) => {
        if (b === 0) {
            reject("Cannot divide by zero");
        } else {
            resolve(a / b);
        }
    });
}

divide(20, 5)
    .then(result => console.log("Result:", result))
    .catch(error => console.log(error));
