// for of --> in javascript ( iterable data types )

// we can even put the objects inside the array
// [{},{},{}] and fetch the values from them.

const Array = [1,2,3,4,5]

for(const num of Array){
    // console.log(num)
}

const greeting = "Hello World"

for (const greet of greeting) {
    // console.log(greet)
}


// map in javascript -> map objects store the key value pair in javscript the difference is that they store only unique values.

const map  = new Map();
map.set("USA", "united states of america")
map.set("IN", "India")
map.set("IN", "Australia")

console.log(map.get("IN"))
console.log(map.size)
console.log(map)

// for of loop on map
// using destructuring the array cause it returns the array 
for (const [key,value] of map) {
    console.log(key,":-",value)
}

for (const key of map) {
    console.log(key)
}

// using for of loop on objects

myObject = {
    name:"Rahul",
    age:25,
    city:"delhi"
}
// cannot iterate an object using for of method but we have other methods to iterate objects.
for (const iterator of myObject) {
    //console.log(iterator)
}

