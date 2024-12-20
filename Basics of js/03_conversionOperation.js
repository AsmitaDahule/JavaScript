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


 // **************** Operations **************************************

 let num1 = 3
 let nevNum1 = -num1
// console.log(nevNum1)

// basic math operations
console.log(3+3)
console.log(3-3)
console.log(3*3)
console.log(3**2)
console.log(3%2)
console.log(3/4)

let str1 = "hola"
let str2 = " guys"

let str3 = str1 + str2
console.log(str3)

console.log("1" + 2) // 12
console.log("1" + "2") // 12
console.log(1 + "2") // 12
console.log("1" + 2 + 2) // 122
console.log(1 + 2 + "2")  // 32

console.log(+true) // 1
console.log(+"") // 0

// let num2, num3, num4
//  num2 = num3 = num4 = 2+2  (never prefer this )

let count = 100
console.log(count)  // 100
++count;
console.log(count)  // 101
console.log(count++) // 101  first print then increment
console.log(++count) // 103  first increment then post

