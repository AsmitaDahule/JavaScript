//*** global scope is different at terminal and console ***//

// let a = 10;
// const age = 21;

// if(true){
//     let a = 20;
//     const age = 54;
//     var b = 99;  // can accesed outside a block
//     console.log(`Inner block ${a} `);
// }

// console.log(b)
// console.log(`outer ${a}`);

// for(let i = 0; i < 5; i++){
//     const ele = i;
//     console.log(i)
// }

// console.log(i)  // out of the scope




function one(){
    const username="mekochan";

    function two(){
        const website="youtube";
        console.log(username);
    }
    // console.log(website);

    two();
}

one();



if(true){
    username="mekochan";
    if(username==="mekochan"){
        const website=" chai aur code"
        console.log(username+website)
    }
    // console.log(website)   // out of scope
}
// console.log(username)    // out of scope




// ******************** interesting ******************

addOne(5);  // run smoothly
function addOne(num){
    return num+1;
}

console.log(addOne(5));


// also called expression
// addTwo(5);   // give error (hoisting)
const addTwo = function(num){
    return num + 2;
}

console.log(addTwo(5))