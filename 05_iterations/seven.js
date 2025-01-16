const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNumbers.map((num)=>{
//     return num+10
// })


// chaining of methods of array

const newNums = myNumbers
                    .map((num)=>{
                        return num*10
                    })
                    .map((num)=>{
                        return num+1
                    })
                    .filter((num)=>{
                        return num>40
                    })
                    .map((num)=>{
                        return num-1
                    })

console.log(newNums);
