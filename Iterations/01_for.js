
for(let i = 1; i < 6; i++){
    const element = i;
    console.log(element);
}


//  nested for loop

for(let i = 0; i < 5; i++){
    console.log("outer for loop");
    for(let j = 0; j < 5; j++){
        console.log("inner for loop")
    }
}


// break and continue

for(let i = 1; i < 11; i++){
    
    if(i == 5) continue;  // skip 5
    console.log(i)
    if(i == 7) break;     // break the loop
}