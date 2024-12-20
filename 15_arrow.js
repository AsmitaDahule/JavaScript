const user = {
    username:"mekochan",
    price:599,

    welcomeMessage:function(){
        console.log(`${this.username} , welcome to website`)  // this refers to the current context
        console.log(this);
    }
}

user.welcomeMessage()
user.username = "sam"   // context change
user.welcomeMessage()  


console.log(this);   // {} => node environment  andd window object is global object on => console


function tea(){
    let username="mekochan";
    console.log(this);
    // console.log(this.username);   // undefined
}

// const tea =function(){
//     let username="mekochan";
//     console.log(this);
//     // console.log(this.username);   // undefined
// }

// tea()


 //*** arrow function***
const tea =() => {
    let username="mekochan";
    console.log(this);   
    console.log(this.username);   // undefined
}

// tea();


// const addTwo = (n1, n2) => {
//     return n1 + n2;
// }


// implicit return (man leta hu likhne ki jarurat nhi he )
const addTwo = (n1,n2) => n1 + n2;
const addTw  = (n1,n2) => (n1 + n2);   // return likhne ki jarurat nhi if {} ye use kiya to hi return likhana padega  isiko explicit kehte hai

console.log(addTwo(2,5));
console.log(addTw(4,5));


// const addone = (num1,num2) => {username:"meckochan"}  // undefined
const addone = (nu1, n2) => ({username:"mekochan"})   // now work

console.log(addone(4,5));  

