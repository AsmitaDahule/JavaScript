const coding = ["js","python","java","ruby","cpp","c#"];

// coding.forEach(element => {
//     console.log(element);
// });



// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)



// coding.forEach( (item,index,arr)=> {
//     console.log(item,index,arr);
// })



const myCoding = [
    {
        languageName:"js",
        languageFileName:"file.js"
    },
    {
        languageName:"python",
        languageFileName:"file.py"
    },
    {
        languageName:"cpp",
        languageFileName:"file.cpp"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})