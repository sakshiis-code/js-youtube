// Dates
let myDate = new Date()
console.log(myDate);

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());

console.log(typeof myDate); // object

// let myCreateDate = new Date(2024,12,1)
// let myCreateDate = new Date(2023,0,23,5,3)
// let myCreateDate = new Date("2023-01-14")
let myCreateDate = new Date("01-14-2023")
console.log(myCreateDate.toLocaleString());


let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDate());
// console.log(newDate.getDay());
// console.log(newDate.getTime());

// console.log(`Date: ${newDate.getDate()} and Day: ${newDate.getDay()}`);


newDate.toLocaleString('default',{
    weekday: "long",
    dateStyle: "full"
})
