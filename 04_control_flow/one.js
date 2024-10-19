// if condition in javascript

// ==
if(2=="2"){
    console.log("Executed")
}

// ===
if(2==="2"){
    console.log("Again Executed")
}

// != 
if(2!="2"){
    console.log("Executed")
}

// !==
if(2!=="2"){
    console.log("Executed")
}

const temperature = 40
if(temperature >= 40){
    console.log("temperature is less than or equal to 40.")
}else{
    console.log("temperature is greater than 40.")
}


// new value cannot be assigned to the constant variables . 
// const quazi = 12
// quazi = 13
// console.log(quazi)

let balance = 1000

if(balance===1000) console.log("Test"); // use this if needed

// donot write multiple line in implicit block scope if condition not recommended at all.
//if(balance==1000) console.log("test"), console.log("test2");
//this one is not recommended at all. very bad coding practice


const isLoggedIn = true
const debitCard = true

if(isLoggedIn && debitCard && 2==2){
    console.log("Allow to Buy the Course.")
}

const isLoggedInFromGoogle = false
const isLoggedInFromEmail = true
if(isLoggedInFromEmail || isLoggedInFromGoogle){
    console.log("Allow now as well!")
}

