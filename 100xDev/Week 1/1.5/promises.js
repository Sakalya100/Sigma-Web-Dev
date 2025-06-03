// Ugly way to create our own asynchronous function
// 99% async functions we write in JS are essentially wrappers over the JS web api asynchronous methods
// setTimeout, readFile, fetch, etc.

const fs = require("fs");

function rickyreadFile(cb){
    fs.readFile("file.txt", "utf-8", (err, data) => {
        cb(data);
    });
}

function onDone(data){
    console.log(data);
}

rickyreadFile(onDone);


// Promise Way
// Promises are introduced to remove the callback hell
// It is a nicer way to handle callbacks
const fs = require("fs");

function rickyreadFilePromise(){
    return new Promise(function(resolve){
        fs.readFile("file.txt", "utf-8", (err, data) => {
            resolve(data);
        });
    });
}

// function onDone(data){
//     console.log(data);
// }

// rickyreadFilePromise().then(onDone)

// Async and Await
function kiratAsyncFunction(){
    return new Promise(function(resolve){
        setTimeout(
            resolve("Hello World"),
            1000
        )
    })
}

async function kiratAsyncAwait(){
    // no callbaclks, no .then syntax required
    const data = await kiratAsyncFunction();
    console.log(data);
}

kiratAsyncAwait();