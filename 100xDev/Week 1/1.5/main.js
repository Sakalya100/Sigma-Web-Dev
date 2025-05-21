function findSum(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    console.log(sum);
}

function findSumtill100(){
    return findSum(100);
}

// This is an asynchronous function
// setTimeout is a JavaScript Web API available to all JavaScript functions
// It takes a function and a time in milliseconds
// It will call the function after the time has passed
// It will not block the execution of the code and move to the next executable line of code
// It will call the function after the time has passed
// setTimeout(findSumtill100, 1000); 
// console.log("Hello World");


// Synchronous way to set timeout
// It can be done using Busy-Waiting
function syncSleep(){
    let a = 1;
    for(let i=0; i<1000000000; i++){
        a++;
    }
    findSumtill100();
}

// syncSleep();
// console.log("Hello World");


// Common Asynchronous Functions by JS
// fs.readFile => Reads a file from the file system
// Fetch => to fetch some data from an API endpoint

const fs = require("fs");

fs.readFile("file.txt", "utf-8", (err, data) => {
    console.log(data);
});
console.log("Hello World");
// Hello world runs first because readFile is an asynchronous function
