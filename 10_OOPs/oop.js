const user = {
    username: "histesh",
    loginCount: 6,
    signedIn: true,
    getUserDetails : function(){
        console.log("this is a method inside an obejct.")
        console.log(this)
    }
}

//const promiseOne = new Promise()
//const date = new Date()

function User(username , loginCount , isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`hello ${this.username}`)
    }
    return this
}
userOne = new User("quazi", 6 , true)
// it will overwrite the values that's why classes.
// or we can use new keyword to prohibit this issue.
userTwo = new User("Bakhtiyar", 100 , false)

console.log(userOne.constructor)


