// let score = 33
// let score = "33"
// let score = "33abc"
// let score = null
// let score = undefined
let score = true

// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber); // NaN => not a number

// console.log(typeof score);
// console.log(score);

// Notes:
// "33" => 33
// "33abc" => NaN ---> not a number
// true => 1; false => 0


let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);
// console.log(typeof booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "sakshi" => true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);