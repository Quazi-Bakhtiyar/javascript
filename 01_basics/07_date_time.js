let myDate = new Date()
console.log(myDate)

console.log(myDate.toDateString())
console.log(myDate.toString())
console.log(myDate.toLocaleDateString())
console.log(myDate.toTimeString())
console.log(myDate.toJSON())

console.log(typeof myDate)

let myCreatedDate = new Date(2023,0,12,5,4)
console.log(myCreatedDate.toDateString())
console.log(myCreatedDate.toLocaleString())

let timeStamp  =  Date.now()
console.log(timeStamp)

console.log(myDate.toLocaleString("default",{
    weekday : "long"
}))

console.log(myDate.getMonth())
console.log(myDate.getDate())
console.log(myDate.getFullYear())