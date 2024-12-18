// Primitive
  // 7 types : String, Number, Boolean, null, undefined, BigInt, Symbol
    

  const score = 100   // js is a dynamically typed
  const scoreValue = 100.7

  const isLoggedIn = false
  let userEmail;
  const outsideTemp = null
//   const userEmail; error  // const must be initialized

const id = Symbol('125')
const anotherId = Symbol('125')
console.log(id == anotherId)  // false

const bigNum = 54487845645687888686456451n
console.log(bigNum)


// Reference (Non primitive)
 // Array, Objects, Functions

 const heros = ["nangraj", "shaktiman", "doga"]; // array
 let myObj = {
    name: "asmi",
    age: 21,
 } 

 console.log(typeof myfunction)  // function 
 console.log(heros)  // object


 const myfunction = function(){
    console.log("Hello World")
 }

