prevGuesses = [];
let randomNo = parseInt(Math.random()*100 + 1);
let number = document.querySelector("#number")
let submit = document.querySelector("#submit")
let result = document.querySelector("#result")
let remaining = document.querySelector("#attempts")
let prevGuess =document.querySelector("#prevGuess")

let isplay = true;
let attemp = 1;

let warning = document.createElement("p")
Nowas = document.createElement("p")
let restart  = document.createElement("button")
restart.setAttribute("id", "restart")
document.body.appendChild(restart)
document.body.appendChild(Nowas)
document.body.appendChild(warning)
function verifyGuess(guess){
    if(guess < 1 || guess > 100 || isNaN(guess)){
        warning.appendChild(document.createTextNode("invalid input"))
        return false
    }
    checkGuess(guess)
}

function checkGuess(guess){
    if(guess == randomNo){
        result.innerHTML = "YOu Guessed it Right! "
        startGame()
    }else if (guess>randomNo){
        Nowas.innerHTML = "Too High"
    }
    else{
        Nowas.innerHTML = "Too Low"
    }
    displayGuess(guess)
}

function displayGuess(guess){
    prevGuesses.push(guess)
    prevGuess.textContent = "Previous Guesses: " + prevGuesses.join(" ")
    attemp++;
    remaining.innerHTML = `Remaing Attemps: ${11 - attemp}`;
    if(attemp === 11){
        gameend()
    }
}

function gameend(){
    isplay = false;
    number.disabled = true;
    Nowas.innerHTML = `game over! the number was ${randomNo}`
    startGame()
}

function startGame(){
    restart.innerHTML = "Start New Game"
    restart.style.display = "block"
    restart.addEventListener("click", function(){
        isplay = true;
        attemp = 1;
        remaining.innerHTML = "Remaining Attemps: 10";
        prevGuesses = [];
        randomNo = parseInt(Math.random()*100 + 1);
        result.innerHTML = "Result: "
        prevGuess.innerHTML = "PrevGuess: "
        Nowas.innerHTML = ""
    
        number.disabled = false;
        number.value = ""
        restart.style.display = "none"
        if(isplay && number.value){
            verifyGuess(number.value)
        }
    })}

submit.addEventListener("click", function(e){
    e.preventDefault();
    console.log(`clicked ${number.value}`)
    warning.innerHTML = ""
    if(isplay && number.value){
        verifyGuess(number.value)
    }
})



