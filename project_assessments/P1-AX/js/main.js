//Variables
var add = document.getElementById('add')
var minus = document.getElementById('minus')
var total = document.getElementById('display')
var input = document.getElementById('input')
var result = 0


const addition = () => {
    result += parseInt(input.value)
    colorChange()
    total.textContent = result
   
}
const subtraction = () => {
    result -= parseInt(input.value)
    colorChange()
    total.textContent = result
    
}

document.addEventListener('DOMContentLoaded', () => {
    //set input default value to 0
    input.value = 1;
    //add event listeners to plus minus
    add.addEventListener('click', addition)
    minus.addEventListener('click', subtraction)
})

//BONUS: changes color if negative number
const colorChange = () => {
    if (result < 0) {
        total.style.color = 'red'
    } else {
        total.style.color = 'black'
    }
}