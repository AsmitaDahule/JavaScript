// Immediately Invoked Function Expression (IIFE)  => a fuction jo turant call hota hai declaration ke bad (defination ke bad)


// global scope ke pollution se problem hoti he kahi bar ,  to us global scope ke jo variables hai , jo bhi vaha declaration he vo hatane ke liye ==> used IIFE

(function tea(){
    console.log("DB CONNECTED");
})();  // here ; imoortant code end karne ke liye

( function coffe (){
    // named IIFE
    console.log("DB CONNEcted");
})();

( (name) => {
    // simple IIFE (unnamed)
    console.log(`DB connected to ${name}`);
})("mekochan")


// agar 2 IIFE likhani he ek sath to pehle IIFE ke end me ; lagana padega

