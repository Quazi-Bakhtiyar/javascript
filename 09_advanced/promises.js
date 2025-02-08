const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async complete")
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("promise has been consumed successfully!")
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async 2 completed!")
        resolve()
    },1000)
}).then(function(){
    console.log("promise 2 resolved!")
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({user:"chai", email:"chai@example.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user)
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({user:"quazi", password:"passcode"})
        }else{
            reject("something went wrong!")
        }
  },2000)
})

promiseFour
.then((user)=>{
    console.log(user)
    return user.user
})
.then(function(username){
    console.log(username)
})
.catch(function(error){
    console.log(errora)
})
.finally(function(){
    console.log("the promise is either resolved or rejected!")
})

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({user:"javascript", password:"passcode"})
        }else{
            reject("js went wrong!")
        }
  },2000)
})

async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response)
    }
    catch(error){
        console.log(error)
    }
    
}

consumePromiseFive()

async function getAllUser(){
    try{
        const response = await fetch("https://api.github.com/users/quazi-bakhtiyar")
        const data = await response.json()
        //console.log(data)
    }
    catch(error){
        console.log("error: ",error)
    }
}
getAllUser()

// using .then and .catch

fetch("https://api.github.com/users/quazi-bakhtiyar")
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})