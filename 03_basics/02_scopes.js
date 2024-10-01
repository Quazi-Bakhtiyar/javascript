var a = 30;
let b = 3000;
{
    var a = 100;
    let b = 20;
    console.log("inner: ", b)
    
    const c = 30
    console.log(c)
}

console.log(b)
// console.log(b)
// console.log(c)

// var is global scope defined variable wihle const and let are block scope and can only be accessed inside the scope.
// while var is very confusing and creates a lot of bug because it changes it values everywhere.


function one(){
    const username = "Bakhtiyar"
    function two(){
        const website = 'www.youtube.com';
        console.log(username)
    }
    //console.log(website)
    two()
}
one()


// +++++++++++++++++++++++++++++ iNTERESTTING cASe ++++++++++++++++++++++++++++++++++

addOne() // but this function can be access because its not wrap up in a variable

function addOne(num){
    return num+1
}

addTwo() // cannot access addTwo before initialisation because this is wrap up in a variable.
const addTwo = function(num){
    return num+2
}

