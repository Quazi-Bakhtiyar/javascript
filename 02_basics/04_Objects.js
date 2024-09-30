// const tinderUser = new Object() // singleton object 
const tinderUser = {} // non singleton object 
tinderUser.id = 12344;
tinderUser.name = "quazi";
tinderUser.isLoggedIn = false;
// console.log(tinderUser) 

const regularUser = {
    fullName: {
        UserName:{
            Name:"quazi"
        }
    }
}

// console.log(regularUser.fullName.UserName.Name)

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

//const obj3 = Object.assign({}, obj1 , obj2)
const obj3 = {...obj1 , ...obj2}
//console.log(obj3)

//console.log(Object.keys(tinderUser))    // return an array
//console.log(Object.values(tinderUser))
//console.log(Object.entries(tinderUser))
//console.log(tinderUser.hasOwnProperty("name"))
// database return the array of object 
const Users = [
    {
        id:1,
        value:true
    },
    {
        id:1,
        value:true
    },
    {
        id:1,
        value:true
    }
]
//console.log(Users[1].id)

// Destructing the values in objects

const course = {
    name: "Javascript in Hindi",
    price: 999,
    courseInstructor: "Hitesh Choudhary"
}

const{courseInstructor: tutor} = course
console.log(tutor)