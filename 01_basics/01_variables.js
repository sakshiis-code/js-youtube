const accountId = 144553
let accountEmail = "sarahsh@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"

let accountState;

// accountId = 2    // not allowed
accountEmail = "hac@hc.com"
accountPassword = "78542"
accountCity = "Delhi"
console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
Prefer not to use var
because of issue in block scope and functional scope
*/