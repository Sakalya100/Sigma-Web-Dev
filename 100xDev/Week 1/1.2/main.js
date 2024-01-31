let a =1
a = 2
console.log(a);

const personArray = ["harkirat", "sakalya", "anil"]

// for(let i=0; i< personArray.length; i++){
//     console.log(personArray[i]);
// }

// Objects
const users1 = {
    firstName: "Sakalya",
    gender: "Male"
}

const allUsers = [
    {
        firstName: "Sakalya",
        gender: "Male"
    },
    {
        firstName: "Arjama",
        gender: "Female"
    },
    {
        firstName: "Anil",
        gender: "Male"
    }
]

for (let i=0; i< allUsers.length; i++){
    if(allUsers[i]["gender"] == "Male"){
        console.log(allUsers[i].firstName); //allUsers[i]["firstName"] are same
    }
    
}

function sum(a,b) {
    // take input and give output
    return a+b;
}

// Callback
function sum(num1, num2, fnToCall){  // We passed a function as an argument
    let res = num1 + num2
    fnToCall(res);
}

function displayResult(data){
    console.log("Result of the sum is: " + data);
}

function displayResultPassive(data){
    console.log("Sum's Result is: " + data);
}

// You are only allowed to call one function after this
// How to displayResult of a sum

// const ans = sum(1,2);
// displayResult(ans); // But this uses 2 function calls

// Soln
const ans = sum(1, 2, displayResult);

// Example
function calculateArithmetic(a, b, fn){
    return fn(a, b)
}

function sum(a, b){
    return a + b;
}

function minus(a, b){
    return a - b;
}

ans = calculateArithmetic(1, 2, minus);
console.log(ans);


function greet(){
    console.log("hello world!");
}

setTimeout(greet, 3*1000) // syntax takes code to run and the delay in seconds. This means 3 seconds delay