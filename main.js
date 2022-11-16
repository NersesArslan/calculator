const add = (a, b) => {
    return a + b;
}

const substract = (a, b) => {
    return a - b;
}

const multiply = (a, b) => {
    return a * b;
}

const divide = (a, b) => {
    return a / b;
}

const operate = (operator, a, b) => {
    if(operator === '+'){
        return add(a, b);
    } else if(operator === '-'){
        return substract(a, b)
    } else if(operator === '*'){
        return multiply(a, b);
    } else if(operator === '/'){
        return divide(a, b);
    }
}
const buttons = document.querySelectorAll('div.button');
const display = document.querySelector('div.display');



buttons.forEach((div) => {
    div.addEventListener('click', () => {
        display.textContent = div.id;
})});

