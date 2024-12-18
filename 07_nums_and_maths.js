const score = 400;
console.log(score);

const balance = new Number(1000);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNum = 23.753;
console.log(otherNum.toPrecision(3));

const hundreds = 100000000;
console.log(hundreds.toLocaleString('en-IN'));





// ++++++++++++++++++++++++++++ maths +++++++++++++++++++++++++++++++++++++++++++

console.log(Math)
console.log(Math.abs(4))
console.log(Math.abs(-4))
console.log(Math.round(4.1))
console.log(Math.round(4.5))
console.log(Math.ceil(4.1))
console.log(Math.floor(4.9))
console.log(Math.sqrt(256))
console.log(Math.max(4,56,1,222))
console.log(Math.min(54,1,25,1))

console.log(Math.random())   // 0 to 1 range
console.log(Math.ceil(Math.random()))  // always give 1 
console.log(Math.random() * 100 + 1)  // 0 to 100 range

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min )