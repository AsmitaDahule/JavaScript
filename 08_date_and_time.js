let myDate = new Date()
console.log(myDate.toLocaleDateString());  // 12/18/2024
console.log(myDate.toLocaleTimeString());  // 12/18/2024 3:51:59 PM
console.log(myDate.toTimeString());   // 12/18/2024  3:52:53 PM  15:52:53 GMT+0530 (India Standard Time)

console.log(myDate.toUTCString());  /*  12/18/2024
3:53:59 PM
15:53:59 GMT+0530 (India Standard Time)
Wed, 18 Dec 2024 10:23:59 GMT*/

console.log(typeof myDate)  // object

let myCreateDate = new Date(2005,7,1)    // months are start from 0 
console.log(myCreateDate.toDateString())
let myBirthDate = new Date(2008,8,20,8,25,21) 
console.log(myBirthDate.toLocaleString())
const d = new Date("12-24-2004")  // month start from 1
console.log(d.toString())

let myTimeStamp = Date.now();
console.log(myTimeStamp);  // time in milisecond

console.log(myCreateDate.getTime());  
console.log(Math.floor(Date.now()/1000))

let newDate = new Date();
console.log(newDate)
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday:"narrow",
    // timeZone:"" 
})
