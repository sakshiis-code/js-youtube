const name = "sakshi"
const repoCount = 12

// console.log(name + repoCount + " Value");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}.`);

const gameName = new String('ranlkishh')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('l'));

const newString = gameName.substring(4,10)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "   sahsk   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hriti.com/hr%20pralay"
console.log(url.replace('%20','-'));
console.log(url.includes('sundar'));

const gameName1 = "hrsc-opti-kill-menu"
console.log(gameName1.split('-'));