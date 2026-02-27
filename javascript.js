// use of var, let and const
var name = "John";
var name = "Doe"; // var allows redeclaration
let age = 30;
// let age = 31; // let does not allow redeclaration, this will cause an error
const country = "USA";
var a=10;
{
    var a=20; // var is function-scoped, this will affect the outer variable
}
console.log(a); // Output: 20
let b=10;
{
    let b=20; // let is block-scoped, this will not affect the outer variable
}
console.log(b); // Output: 10

let obj1={      
    name:"DK",
    age:19
}
let obj2=obj1; // obj2 is a reference to obj1
obj2.name="John";
console.log(obj1.name); // Output: John, because obj1 and obj2 reference the same object in memory


console.log(5+'5');
console.log(5-'5');
console.log(5=='5');
console.log(5==='5');

// Operators in JS
let x = 10;
x += 5; // x is now 15
x -= 3; // x is now 12
x *= 2; // x is now 24
x /= 4; // x is now 6       
// if else statement
let num = 10;
if (num > 0) {
    console.log("Positive number");
} else if (num < 0) {
    console.log("Negative number");
} else {
    console.log("Zero");
}
// ternary operator
let result = (num > 0) ? "Positive number" : (num < 0) ? "Negative number" : "Zero";
console.log(result);
// bitwise operators
let a = 5; // 0101 in binary
let c = 3;
console.log(a & c); // Output: 1 (0101 & 0011 = 0001)
console.log(a | c); // Output: 7 (0101 | 0011 = 0111)
console.log(a ^ c); // Output: 6 (0101 ^ 0011 = 0110)
console.log(~a); // Output: -6 (bitwise NOT of 0101 is 1010 in two's complement, which is -6 in decimal)
console.log(a << 1); // Output: 10 (0101 shifted left by 1 becomes 1010)
console.log(a >> 1); // Output: 2 (0101 shifted right by 1 becomes 0010)        
// functions in JS
function add(a, b) {
    return a + b;
}   
console.log(add(5, 3)); // Output: 8
// arrow function
const multiply = (a, b) => a * b;
console.log(multiply(5, 3)); // Output: 15  
// default parameters
function greet(name = "Guest") {
    return `Hello, ${name}!`;
}
console.log(greet()); // Output: Hello, Guest!
console.log(greet("Alice")); // Output: Hello, Alice!

let objq={
    name:"DK",
    state:{
        city:"Delhi",
    },
    age:19
}
// optional chaining
console.log(objq?.state?.city); // Output: Delhi
console.log(objq?.state?.country); // Output: undefined, does not throw an error