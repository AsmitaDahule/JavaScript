// stack (primitive)
// heap (Non-primitive)

let myName = "asmiii"  // inside a stack

let anotherName = myName // 
anotherName = "tituuu"

console.log(anotherName)
console.log(myName)


let userOne = {
    email: "google.com",
    upi: "user@abl"
}
 console.log(userOne.email)
let userTwo = userOne
userTwo.email = "xyz@mail.com"
console.log(userOne.email);
console.log(userTwo.email)