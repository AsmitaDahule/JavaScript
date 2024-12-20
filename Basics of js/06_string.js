const name = "asmii"
const count = 21

console.log(name + count + " value")  // not a good way

console.log(`hello my name is ${name} and i am ${count} year old`)  // modern way => string interpollation

const gname = new String("  asmi  ")
console.log(gname)
console.log(typeof(gname))  // object
console.log(gname[0])
console.log(gname.__proto__);


console.log(gname.length);
console.log(gname.trim());
console.log(gname.toUpperCase());
console.log(gname.charAt(2));
console.log(gname.indexOf('m'));

let str1 = "Hello";
let str2 = " World";
console.log(str1.concat(str2));  // "Hello World"

let str = "Hello World";
console.log(str.includes("Hello"));  // true


let st = "Hello World, Hello again";
console.log(st.lastIndexOf("Hello"));  // 13


let str6 = "Hello";
console.log(str6.at(-1));  // "o"


console.log(String.fromCharCode(72, 101, 108, 108, 111));  // "Hello"


let str7 = "Hello World";
console.log(str7.endsWith("World"));  // true


let str8 = "Hello ";
console.log(str8.repeat(3));  // "Hello Hello Hello "


let num = 123;
console.log(num.toString());  // "123"


let str9 = "Hello World  ";
console.log(str9.trimEnd());  // "Hello World"


let str10 = "  Hello World";
console.log(str10.trimStart());  // "Hello World"


let str11 = "Hello World";
console.log(str11.substring(0, 5));  // "Hello"


let str12 = "Hello World";
console.log(str12.split(" "));  // ["Hello", "World"]


let str13 = "Hello World";
console.log(str13.replace("World", "JavaScript"));  // "Hello JavaScript"
