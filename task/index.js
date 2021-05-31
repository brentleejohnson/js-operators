// Swapping values in 3 different
// ways using JS codes

/* // First - Using A Temporary Variable
// take input from the users
let a = prompt("Enter the first variable: ");
let b = prompt("Enter the second variable: ");

// create a temporary variable
let temp;

// swap the variables
temp = a;
a = b;
b = temp;

console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`); */

/* // Second - Using Arithmetic Operators
// take input from the users
let a = parseInt(prompt("Enter the first variable: "));
let b = parseInt(prompt("Enter the second variable: "));

// addition and subtraction operators
a = a + b;
b = a - b;
a = a - b;

console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`); */

// Third
// the inputs from the user
let a = parseInt(prompt("Enter the first variable: "));
let b = parseInt(prompt("Enter the second variable: "));

// multiplication and subtraction oeprators
a = a * b;
b = a / b;
a = a / b;

console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);
