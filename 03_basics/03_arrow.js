const user = {
    username: "meenu",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);        
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);


// function chai() {
//     let username = "krish"
//     console.log(this.username);   
// }
// chai()


// const chai = function() {
//     let username = "krish"
//     console.log(this.username);
// }

const chai = () => {
    let username = "krish"
    // console.log(this);
}

chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


// implicit method 
// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "hitesh"})

console.log(addTwo(3, 4));


// const myArr = [4, 2, 3, 9]
// myArr.forEach()