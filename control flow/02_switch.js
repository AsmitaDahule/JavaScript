/*
switch(choice){
    case 1:
        break;
    case 2:
        break;
    default:
        
}

*/
const month = 2;
switch(month){
    case 1:
        console.log("Jan")
        break;
    case 2:
        console.log("feb")
        break;
    case 3:
        console.log("Jmarch")
        break;

    default:
        console.log("sorry")
}



// thruthy and falsy values

const name = [];
if(name){
    console.log("welcome mekochan")
} else {
    console.log("Invalid name")
}

// falsy value ==> false , 0 , -0, BigInt (0n), "", null, undefined, NaN

// truthy values ==> "0", "false", "null", " ", [], {}, function(){} -> empty function


if(name.length === 0){
    console.log("Array is empty")
}


const emptyobj = {}

if(Object.keys(emptyobj).length === 0){
    console.log("object is empty")
}


// false == 0  ==> true
// false == ""  ==> true
// 0 == ""  ==> true