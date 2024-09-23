const arr = [0,1,1,1]
const Heroes = ["shaktiman","iron man"]

const array2 = new Array(2,3,4,5)
// console.log(array2[3])

// Array Methods

// arr.push(6)
// arr.pop()

// arr.unshift(12) // add the value at the starting index of the array
// arr.shift() // remove the value from the starting of the array
// console.log(arr.includes(1))
// console.log(arr.indexOf(9))

// const newArr = arr.join()
// console.log(newArr) // returns string type 

// slice and splice method in arrays

console.log("A", arr)

const newArr = arr.slice(1,3)

console.log(newArr)

console.log("B", arr)

// slice doesnot include last index but splice include the last index too and it changes the original array as well while slice doesnot change the original array on which the operation is being perfomrmed.


const myArr2 = arr.splice(1,3) 
console.log(myArr2)
console.log(arr)


