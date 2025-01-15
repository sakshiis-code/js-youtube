const coding = ["js", "rb", "cpp", "py"]

// coding.forEach( function (item) {
//     console.log(item);    
// })

// coding.forEach( (val) => {
//     console.log(val);    
// })

// function printMe(item) {
//     console.log(item);    
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, array) => {
//     console.log(item, index, array);    
// })


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: ".js"
    },
    {
        languageName: "python",
        languageFileName: ".py"
    },
    {
        languageName: "java",
        languageFileName: ".java"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);    
})