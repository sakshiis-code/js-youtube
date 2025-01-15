const myObj = {
    js: 'JavaScript',
    cpp: 'C++',
    rb: "Ruby",
    swift: "Swift by apple"
}

for (const key in myObj) {
    // console.log(`${key} is the file name for ${myObj[key]}`);
}


const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(programming[key]);    
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United Sates Of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);    
// }