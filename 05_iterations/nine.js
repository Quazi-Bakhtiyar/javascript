const myNums = [1,2,3,4,5]

// const totalNum = myNums.reduce( function(accumulator, currentVal) {
//     console.log(`accumulator ${accumulator}, ${currentVal}, ${accumulator + currentVal}`)
//     return accumulator + currentVal
// },0)


// using arrow function

const totalNum = myNums.reduce((acc,currval) => (acc+currval),0)
//console.log(totalNum)

const shoppingCart = [
    { product: 'phone', qty: 1, price: 699 },
    { product: 'Screen Protector', qty: 1, price: 998 },
    { product: 'Memory Card', qty: 2, price: 2099 }
]

const totalAmount = shoppingCart.reduce((acc,currval) => (acc+currval.price),0)
console.log(totalAmount)