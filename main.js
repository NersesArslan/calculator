const add = (a, b) => {
    return a + b;
}

const subtract = (a, b) => {
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
        return subtract(a, b)
    } else if(operator === '*'){
        return multiply(a, b);
    } else if(operator === '/'){
        return divide(a, b);
    }
}


const calculator = document.querySelector(".calculator");
const keys = calculator.querySelector(".keys");


keys.addEventListener("click", e => {
    const key = e.target;
    const action = key.dataset.action;
  if(!action) {
    console.log('number key!');
  } else if(
    action === 'add' ||
    action === 'subtract' ||
    action === "multiply" ||
    action === "divide"
  ){
    console.log("operator key")
  } else if(action === "clear"){
    console.log("clear key")
  } else if (action === "decimal"){
    console.log("decimal key")
  } else if(action === "calculate"){
    console.log("equal key")
  }

})