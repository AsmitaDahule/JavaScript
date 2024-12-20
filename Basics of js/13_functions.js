// function greeting(){
//     console.log("Hare Krishna Dostooo")
// } 

// greeting()



// function sum(num1,num2){
//     result = num1+num2;
//     return result;
// }

// sum(2,5);
// console.log(sum(2,5))



// function userLogin(name="kittu"){
//     return `${name} just logged in`
// }
//  console.log(userLogin("anupama"))



// function mul(m1,m2){
//     result = m1 * m2
//     console.log(result)
// } 

// mul(5,8);



// function sub(n1,n2){
//     console.log(n1 - n2)
// }

// sub(5,6);



function calculateCarPrice(val1,val2,...num1){  // rest operator
    return num1;
}

console.log(calculateCarPrice(20,30,40,65));


const user = {
    username:"mekochan",
    price:499
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

//handleObject(user)
handleObject({
    username:"sami",
    price:399
})


const mynewarray = [20,40,10,60]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(mynewarray))


