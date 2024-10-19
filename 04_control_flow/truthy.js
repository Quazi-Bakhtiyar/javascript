const userEmail = "quazi@ai.com"

if(userEmail){
    console.log("Got User's Email!")
}

let password; 
//or 
password = "";
if(password){
    console.log("Got User's Password")
}else{
    console.log("did not get the user's password!")
}

// falsy values

// false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN 

// truthy values
// all values other than falsy for example : "0" , "false" , [] , {} , function(){}, " " 1 ,......

// To check the Emppty Array 
let arr = []
if(arr.length===0){
    console.log("array is empty")
}

// To check the Empty object 
const emptyObject = {}
// Object.keys(emptyObejct) -> returns the keys in an array

if(Object.keys(emptyObject).length===0){
    console.log("obejct is empty")
}