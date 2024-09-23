// singleton 
// Object.create



// object literals
const mysym = Symbol("key1")
const User = {
    Name: "quazi",
    [mysym] : "mykey1",
    "full Name" : "Quazi Bakhtiyar Ali" ,  
    age : 19,
    location: "jaipur",
    email: "quazi@microsoft.com",
    isLoggedIn: true,
    lastLoginDays: ["monday", "Sunday"]
}

// console.log(User.email)
// console.log(User["location"])
// console.log(User["full Name"])
// console.log(User[mysym])

User.email = "quazi@chatgpt.com"

//Object.freeze(User)

User.email = "aman@google.com"
console.log(User)

User.greeting = function(){
    console.log("hello Users")
}
User.greetingTwo = function(){
    console.log(`hello user ${this.Name}`)
}

console.log(User.greeting())
console.log(User.greetingTwo())

