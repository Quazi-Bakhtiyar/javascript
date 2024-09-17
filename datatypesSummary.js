// Premitive Datatypes  -- 7 types

// 1. String
// 2. Number
// 3. Boolean
// 4. Null
// 5. Undefined
// 6. Symbol
// 7. BigInt


// Non primitive Datatypes or Reference type 

// Array , Objects , Fucntions

// Javascript is dynamically types language as we don't need to define the type of the variable at compile time


let userEmail; // value is undefined automatically

const id = Symbol('123')
const anotherId = Symbol("123")

console.log(id , anotherId)
console.log(id===anotherId)

const bigNumber = 234343242423432n; // bigInt

const heroes = ["shaktiman","Nagraj"]

let abc = {
    name:"quazi",
    age:3
}

const Myfunction = function(){
    return hello;
}

console.log(typeof Myfunction)
console.log(typeof heroes)
console.log(typeof abc)

// datatype of array is object nd for function datatype is function and for obeject is object 
// datatype of Null is Object meand null is an object