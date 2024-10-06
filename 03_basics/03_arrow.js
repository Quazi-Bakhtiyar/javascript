const obj = {
    username: "quazi",
    age: 19,

    welcome: function(){
        console.log(this.username)
        console.log(this) // return the same object
    }
}

obj.username = "aman"

obj.welcome() // return empty object in node environement and window object in chrome engine


console.log(this)

const hello = function(){
    let username = "Bakhtiyar"
    console.log(`hello, ${username}`)
}

const hello2 = function(){
    let username = "Bakhtiyar"
    // this doesnot work in function, returns undefined. only works for objects.
    console.log(`hello, ${this.username}`)

    console.log(this) // but when printed this only, it returns a lot with itself
}

//hello2()

const chai = ()=> {
    console.log("hello")
}

chai()

const addTwoNum = (num1,num2)=> num1+num2
// const addTwoNum = (num1,num2)=> num1+num2 also written in paranthese and does not need to write the return keyword when 
// using arrow function with parantheses (). it will return the value automatically. but when using the curlibraces then return keyword is necessary.
console.log(addTwoNum(3,2))

// const returnObject = ()=> {username:"hitesh chaudhary"} this return the undefined because to return obejct use paranthese()
const returnObject = () => ({username:"Hitesh chaudhary"})
console.log(returnObject())

// we can write function as well as arrow function in forEach method or array also like
myArr = [1,2,3,4,5]

myArr.array.forEach((element) => {
    // syntax
});

myArr.forEach(function(){
    // syntax
})

// we can use arrow function in map method as well as in filter method. it is used to
// create a new array with the results of applying a provided function on every element in this array.