// map, filter and arrow functions

// Map
// Question: take an array and double each value

// Normal solution
const input = [1, 2, 3, 4, 5];
const output = [];

for (let i = 0; i < input.length; i++) {
  output.push(input[i] * 2);
}

console.log(output);

// Map solution

function transform(item) {
  return item * 2;
}

const input2 = [1, 2, 3, 4, 5];
const output2 = input2.map(transform);

console.log(output2);

// another way
const output3 = input2.map(function transform(item) {
    return item * 2;
  });

console.log(output3);

// Filter
// Question: take an array and return only the even numbers

// Normal solution
const input3 = [1, 2, 3, 4, 5];
const output4 = [];

for (let i = 0; i < input3.length; i++) {
  if (input3[i] % 2 === 0) {
    output4.push(input3[i]);
  }
}

console.log(output4);

// Filter solution

function isEven(item) {
  return item % 2 === 0;
}

const output5 = input3.filter(isEven);

console.log(output5);   

// or directly pass the function
const output6 = input3.filter(function isEven(item) {
  return item % 2 === 0;
});

console.log(output6);

// using arrow function
const output7 = input3.filter((item) => item % 2 === 0);

console.log(output7);
