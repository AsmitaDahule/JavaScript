const myNums = [1,2,3];

// const myTotal = myNums.reduce(function (accumalator,currentVAlue){
//     console.log(`accumalator: ${accumalator} and currentVAlue: ${currentVAlue}`);
//     return accumalator + currentVAlue
// }, 0)

// const myTotal = myNums.reduce( (accu,curr) => { return accu + curr},0 )  // return


const myTotal = myNums.reduce( (acc,curr) => acc+curr,0 )   // without return 

console.log(myTotal);




const shoppingCart = [
    {
        itemName: "js",
        price: 2999
    },
    {
        itemName:"dbms",
        price: 3999
    },
    {
        itemName:"os",
        price:899
    }
]

// console.log(shoppingCart)

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price,0 )
console.log(priceToPay)