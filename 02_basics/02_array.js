const Marvel_heroes = ["ironman", "thor", "hulk"]
const dc_heroes = ["Batman", "joker" , "spiderman"]

// Marvel_heroes.push(dc_heroes)
// console.log(Marvel_heroes) // array into array and does not actually merge array but put one array into another

// console.log(Marvel_heroes[3][0])

//const newArray = Marvel_heroes.concat(dc_heroes) // concat does not change orginal array but returns a new array

//console.log(newArray)

// const newArray = [...Marvel_heroes , ...dc_heroes] // spread method in array 

// console.log(newArray)

const another_arr = [1,2,3,[4,5,6],7,[4,5,[4,3]]]

// to get a flat array you can use the flat method in it

const real_another_arr = another_arr.flat(Infinity)
console.log(real_another_arr) 

// returns this type of flat array
// [
//     1, 2, 3, 4, 5,
//     6, 7, 4, 5, 4,
//     3
//   ]

console.log(Array.isArray("quazi")) // checks if it is array or not
console.log(Array.isArray([1,2,3]))

console.log(Array.from("quazi"))
console.log(Array.from([1,2,3]))


const score1 = 10
const score2 = 10
const score3 = 10

console.log(Array.of(score1, score2, score3))








