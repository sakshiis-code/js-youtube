// singleton

// object literals
// Object.create

const mySym = Symbol("key1")

const JsUser = {
    name: "Sarah",
    "full name": "Sarah sharma",
    [mySym]: "myKey1",
    age: 19,
    location: "Kolkata",
    email: "sarahhh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]);  // string

JsUser.email = "sarahh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "sara@microsoft.com"
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
