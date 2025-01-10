// Primitive

// 7 types: String, Number, Boolean, null, undefined, BigInt, Symbol

// JavaScript is a dynamic language. 
// Because data type will automatically assigned at the time of compilation or code execution.

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

// const bigNumber = 2314567892543013245n



// Reference (Non - primitive) type

// Array, Objects, Functions
const person = ["riya", "nidhi", "deepak"];
let myObj ={
    name: "Sarah",
    age: 19
}

const myFunction = function () {
    console.log("Hello World");
}

console.log(typeof bigNumber);  // undefined
console.log(typeof outsideTemp);    // object
console.log(typeof scoreValue); // number
console.log(typeof myFunction); // function
console.log(typeof myObj);  // object
console.log(typeof person);     // object
console.log(typeof id); // symbol