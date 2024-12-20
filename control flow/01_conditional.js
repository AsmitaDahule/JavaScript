// if
// if condition == true then only execute code inside the if
// if(condition){

// }

const isUserLoggedIn = true;

if(isUserLoggedIn){
    console.log("inside the if")
}


// >, >=, <, <=, ==, ===


// == sirf value check karta he
if(2 == "2"){
    console.log("executed");
}


// === datatype bhi check krta he
if(2 === 2){
    console.log("executed")
}


const temperature = 5;
if(temperature > 44){
    console.log("temperature is greater than 44");
}
console.log("temperature is not greater than 44")


// if-else
if(temperature < 10){
    console.log("it's cool")
} 
else{
    console.log("it's hot")
}



const score = 500;

if(score > 100){
    const power = "fly";
    console.log(`user power: ${power}`)
}

// console.log(`power is: ${power}`) // out of scope



const balance = 10000;
if(balance > 50000) console.log("you are rich, so rich!");

// if(balance < 10) console.log("really bro "), console.log("you have less than 10rs");   // not a good method


// else-if ladder

if(balance < 500){
    console.log("too less")
} else if(balance < 1000){
    console.log("medium balance")
} else {
    console.log("high balance")
}



const isUserLogged = true;
const debitCard = true;

if(isUserLogged && debitCard){
    console.log("Allow to buy course ")
}

if(5==5 || 8 > 10){
    console.log("inside if")
}


// Nullish Coalescing Operator (??) : null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
val1 = null ?? 10 ?? 15
console.log(val1)

// Terniary Operator

// condition ? true : false

const price = 100

price >= 80 ? console.log("greater than 80") : console.log("less than 80")