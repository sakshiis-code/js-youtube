function sayMyName() {
    console.log("S");
    console.log("A");
    console.log("K");
    console.log("S");
    console.log("H");
    console.log("I");
}

// sayMyName()

function addTwoNos(number1, number2) {
    console.log(number1 + number2);
}

// addTwoNos(3,5)
// addTwoNos(3,"5")
// addTwoNos(3,"a")
// addTwoNos(3,null)

function addTwoNos(number1, number2) {
    // let result = number1 + number2
    // console.log("Hi, hello there!!");
    // return result

    return (number1+number2)
}
const result = addTwoNos(3,5)
// console.log("Result: ", result);



function loginUserMessage(username) {
    if (!username) {
        console.log("Please enter a username");
        return
    }

    return (`${username} just logged in`)
}

// console.log(loginUserMessage("sakshi"));    // sakshi just logged in
// console.log(loginUserMessage(""));  //  just logged in
// console.log(loginUserMessage());    // undefined just logged in