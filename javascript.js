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