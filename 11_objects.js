// singleton => single (constructor)
//Object.create


// object literals


const mysym = Symbol("key1")

const jsUser = {
    name: "mekochan",   // name is as a "name" actually
    age: 21,
    [mysym]:"mykey1",
    location: "mumbai",
    email: "xyz@mail.com",
    "salary": 54564
}

// console.log(jsUser.location)
// console.log(jsUser["location"])

// console.log(jsUser.salary)

// console.log(jsUser[mysym])
// console.log(typeof mysym)  // symbol
// console.log(typeof [mysym])  // object

// jsUser.name = "tuntun"
// console.log(jsUser.name)

// Object.freeze(jsUser)  // changes not allowed after freez

// jsUser.name = "katar"
// console.log(jsUser.name)  // tuntun
// console.log(jsUser)


jsUser.greeting = function(){
    console.log("hiiii")
}

jsUser.greeting2 = function(){
    console.log(`hii user ,${this.name}`)
}
console.log(jsUser.greeting())
console.log(jsUser.greeting2())

// myArray = ["m","k","r"]
// myArray[0]
// myArray[2]