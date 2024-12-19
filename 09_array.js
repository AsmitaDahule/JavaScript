// array in js are resizable
// index start from '0'
const arr = [21,54,56,"asmi0", 54, true]  // totally fine
console.log(arr)
console.log(typeof arr)  // object 

const myArray = new Array(1,2,3,4)
console.log(myArray[0])

// Array methods

myArray.push(5)  // element insert at end
console.log(myArray);

myArray.pop()  // last element will be pop
console.log(myArray)

myArray.pop(1)  // no need to give arguments
console.log(myArray)

myArray.unshift(9)  // insert element at front
console.log(myArray)

myArray.shift() // delete element from start
console.log(myArray)

console.log(myArray.includes(3))
console.log(myArray.indexOf(3))
console.log(myArray.indexOf(9))  // -1 because element does not exist in an array

