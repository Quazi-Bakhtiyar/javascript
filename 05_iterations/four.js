// we uses for in loop to iterate object and we can also iterate array using for in loop

myObject = {
    js : "javascript",
    cpp : "C++",
    python : "Python",
    rb : "Ruby",
    swift : "Swift by Apple"
}

for (const key in myObject) {
    console.log(`${key} is shortcut for ${myObject[key]}`)
}

// for in loop in Arrays
const programming = ['js','py','rb','java','cpp']

// for in loop returns the index or key of the array while for of loop return the value itself

for (const key in programming) {
    console.log(key) // returns the index Or key
    //console.log(programming[key])
}

const map = new Map()
map.set("IN","India")
// cannot iterate map specially using for in loop.
for (const key in map) {
    console.log(key) // it will not give any output or any error.
}

