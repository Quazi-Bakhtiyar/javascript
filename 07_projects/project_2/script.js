const form = document.querySelector('form')
const height = document.querySelector('#height')
const weight = document.querySelector('#weight')
const result = document.querySelector('#result')

form.addEventListener('submit',function(e){
    e.preventDefault()

    if(height.value === '' || height.value < 0 || isNaN(height.value)){
        result.textContent= 'Please enter a valid height'
    }
    else if(weight.value === '' || weight.value < 0 || isNaN(weight.value)){
        result.textContent= 'Please enter a valid weight'
    }
    else{
        const bmi= (weight.value / ((height.value)/100 * (height.value)/100)).toFixed(2)
        result.textContent= `Your BMI is ${bmi}`
    }
})