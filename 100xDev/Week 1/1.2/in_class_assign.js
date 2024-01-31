// 1. Create a counter in JS to count down from 30 to 0
// 2. Calculate the time it takes between a setTimeout call and the inner function actually running
// 3. Create a terminal clock to display time in terminal (HH:MM:SS)

// Problem 1
let start_count = 30
for(let i=start_count; i>=0; i--){
    console.log(i);
}

// Problem 2

// Initializing time using Date() class and calling the toLocaleString() method that parses the entire date and converts to HH:MM:SS format
let currentTime = new Date().toLocaleTimeString();
console.log(currentTime);

setTimeout(fn, 1000);

function fn(a, b){

    // Again checking system time here to check after how many seconds setTimeout() has passed control to fn
    currentTime = new Date().toLocaleTimeString();
    console.log(currentTime);
    const res = a + b;
}
// setTimeout() actually gives control in 1second.
// The starting time logged was 1:49:51 am
// The code ending time logged was 1:49:52 am

// Problem 3
const currTime = new Date().toLocaleTimeString();
console.log(currentTime);