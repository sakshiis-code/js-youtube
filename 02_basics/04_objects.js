// const tinderUser = new Object()  // singleton object
const tinderUser = {}   // non - singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Sakshi",
            lastname: "Sharma"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "c"}
const obj3 = {5: "d", 6: "c"}

// const obj4 = Object.assign({}, obj1, obj2, obj3)

const obj4 = {...obj1, ...obj2}
console.log(obj4);


const users = [
    {
        id: 123,
        email: "abc@google.com"
    },
    {
        id: 123,
        email: "abc@google.com"
    },
    {
        id: 123,
        email: "abc@google.com"
    },
    {
        id: 123,
        email: "abc@google.com"
    }
]

// console.log(users[1].email);
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// console.log(tinderUser.hasOwnProperty('enroll-no'));



const course = {
    courseName: "js-hindi-tutorials",
    price: "999",
    courseInstructor: "hitesh"
}

// console.log(course.courseInstructor);

const {courseInstructor} = course
console.log(courseInstructor);

const {courseInstructor: instructor} = course
console.log(instructor);


// {
//     "name": "sakshi",
//     "coursename": "js- hindi - tutorial"
//     "price": "free"
// }

[
    {},
    {},
    {}
]