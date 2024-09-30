function addTwoNumbers(number1 , number2){
    return number1+number2;
} // accepting the parameters 

console.log(addTwoNumbers(12,12)) // passing the arguments 

function UserLoginMessage(user = "sam"){ // or give a default value
    if(!user){
        console.log("please enter the username")
        return
    }
    return `${user} logged in.`
}

console.log(UserLoginMessage("quazi"))
console.log(UserLoginMessage()) // undefined 

// Use case of Rest parameter in javascript  ( rest parameter as well as spread operator both uses three dots ...)

function calculateCart(...price){
    return price
}

console.log(calculateCart(100,200,2000,300))

// handling obejct in functions

function HandleObject(anyobject){
    console.log(`username is ${anyobject.name} and price is ${anyobject.price}`)
}

HandleObject({name:"quazi", price:3000})

// handling arrays in functions

myarray = [11,1,2,1,2]

function handleArr(getArr){
    return getArr[4]
}
console.log(handleArr(myarray))

// now this file will be edited and push from vs code