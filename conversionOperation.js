let score = "33" // check for null, undefined, boolean value one by one
let value = 

console.log(typeof score)
console.log(typeof(score))

let valueInNumber = Number(score)
console.log(valueInNumber)  // NaN is also a type
console.log(typeof(valueInNumber))

// "33" => 33
// "33abc" => NaN -> not a number
// true => 1; false => 0



let isLoggedIn = "asmi"  // -1, 1 , any -ve or +ve number and any length string even " " also  gives true only 0 and empty string "" gives false

 let booleanIsLoggedIn = Boolean(isLoggedIn)
 console.log(booleanIsLoggedIn)

 // "asmi" => true
 // "564564" => true
 // " " => true
 // ""  => false
 // 0   => false


 let num = 21

 let strNumber = String(num)
 console.log(strNumber)
 console.log(typeof(strNumber))