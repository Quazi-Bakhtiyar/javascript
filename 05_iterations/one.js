// for loop
 // i is short form of index. 
for(let i = 0 ; i<10; i++){
    //console.log(i);
}
// error comes here because i is not accessible outside the for looop...
//console.log(i)


// table from 1 to 10

for(let i = 1; i<=10; i++){
    for(let j = 1; j<=10; j++){
        //console.log(`${i} X ${j} = ${i*j}`);
    }
}


let myArray = ["flash", "batman", "superman"]

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element)
}