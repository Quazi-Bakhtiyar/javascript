let num = "12a"

//console.log(typeof num)

convertInNumber = Number(num)
//console.log(convertInNumber)  // Nan  -  not a number 

// for true when converting in number from string it gives 1 and 0 for false
// and 0 for null and Nan for undefined 

// and Nan for string which cannot be converted into number for example name or 134adb

let isLoggedIn = 1
let isLoggedInBoolean = Boolean(isLoggedIn)

// console.log(isLoggedInBoolean)

// 1 => true
// "" => false
// "abc" => true
// -1 => true
// 0 => false

let someNum = 11
let stringNumber = String(someNum)
// console.log(typeof stringNumber)
// console.log(stringNumber)

// ************************** Operations in javascript *********************************

let value = 3
let negValue = -value
// console.log(negValue)

// console.log(1+"2")
// console.log("1"+2)
// console.log("1"+2+2)
// console.log(1+2+"2")

// console.log(+true)  // gives value one 1
// console.log(+"")

gameCounter = 200
gameCounter++
++gameCounter
console.log(gameCounter)