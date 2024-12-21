// const coding = ["js","cpp","c","ruby"];

// const values = coding.forEach((item) => {
//     console.log(item);
//      return item
// })

// console.log(values)   // forEach doesn't return anything



// const myNums = [1,2,3,4,5,6,7,8,9,10];

// const newNums = myNums.filter( (num) => num > 5)
// console.log(newNums)

// const newNums = myNums.filter((num) => {
//     return num > 5  // return keyword likhna hi padega q ki ye inside a scope he {}
// })

// console.log(newNums);


// const newNums = [];

// myNums.forEach( (num) => {
//     if(num > 4){
//         newNums.push(num);
//     } 
// } )

// console.log(newNums)



// const myNums1 = [1,2,3,4,5,6,7,8,9,10];

// const newNums = myNums1.map( (num) => {return num + 10} )
// console.log(newNums)


// chaining

const mynum = [1,2,3,4,5,6,7,8]

const newNum = mynum 
                .map((num) => num + 10)
                .map((num) => num + 1)
                .filter((num) => num >= 40)

console.log(newNum)