//*** global scope is different at terminal and console ***//

let a = 10;
const age = 21;

if(true){
    let a = 20;
    const age = 54;
    console.log(`Inner block ${a} `);
}

console.log(`outer ${a}`);

for(let i = 0; i < 5; i++){
    const ele = i;
    console.log(i)
}

// console.log(i)  // out of the scope