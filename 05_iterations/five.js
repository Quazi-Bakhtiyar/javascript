const coding = ["python", "java","ruby", "perl","cpp"]
// for each function takes a callback function as an arguement and callback functions do not have the function name.
coding.forEach(function(val){
    console.log(val)
})


// using arrow function in callback function

coding.forEach((val)=> {
    console.log(val)
})

//another way to print using for each 

function printMe(value){
    console.log(value)
}

coding.forEach(printMe)

// more parameters we can pass into callback function parameter

coding.forEach( (item, index, arr)=>{
    console.log(item, index, arr)
} )

// iterating over the array which have objects inside it [{},{},{}]

const myCoding = [
    {
        name:"python",
        ext:".py"
    },
    {
        name:"javascript",
        ext:".js"
    },
    {
        name:"cpp",
        ext:".cpp"
    }
]

myCoding.forEach( (item)=>{
    console.log(item.name)
} )
// method and properties in an object
// method has a function and is executed ()
// property is a value of key 

