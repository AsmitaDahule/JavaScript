// use const and let always
const accountId = 12145  
let accountEmail = "aabcio@gamil.com"

var password = "sdffds98"  
city = "jaipur"  // it allow but don't prefer

// accountId = 15   // not allowed beacuse it's const

const num = 98; // ; optional
let accountState;  // undefined and this is allow

accountEmail = "xysz@mail.com"
console.log(accountEmail)

console.table([accountEmail, accountId, city,password, accountState]) // all in one table 

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
