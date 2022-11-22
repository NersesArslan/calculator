const calculate = (n1, operator, n2) => {
  let result = ''

  if(operator === 'add'){
    result = parseFloat(n1) + parseFloat(n2)
  } else if(operator === 'subtract'){
    result = parseFloat(n1) - parseFloat(n2)
  } else if(operator === 'multiply'){
    result = parseFloat(n1) * parseFloat(n2)
  } else if(operator === 'divide'){
    result = parseFloat(n1) / parseFloat(n2)
  }
  return result
}


const calculator = document.querySelector(".calculator");
const keys = calculator.querySelector(".keys");

const display = document.querySelector('.display');


keys.addEventListener("click", e => {
  if(e.target.matches('button')) {
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayedNum = display.textContent;
    const previousKeyType = calculator.dataset.previousKeyType

    Array.from(key.parentNode.children)
      .forEach(k => k.classList.remove('is-depressed'))

  if(!action) {
   
    calculator.dataset.previousKeyType = 'number'
    if(displayedNum === '0' || previousKeyType === 'operator'){
      display.textContent = keyContent;
    } else {
      display.textContent = displayedNum + keyContent
    }
    
  } 
  if(
    action === 'add' ||
    action === 'subtract' ||
    action === "multiply" ||
    action === "divide"
  ){
    calculator.dataset.previousKeyType = "operator"
    key.classList.add('is-depressed')
    
    
    calculator.dataset.firstValue = displayedNum
    calculator.dataset.operator = action
  }
  if(action === "clear"){
    
    calculator.dataset.previousKeyType = 'clear'
    display.textContent = '0';
  } 
  if (action === "decimal"){
    if(previousKeyType === "operator"){
      display.textContent = '0.'
    } else if (!displayedNum.includes('.')){
      display.textContent = displayedNum + '.'
    } 
    
    calculator.dataset.previousKeyType = 'decimal'
  } 
  
   if(action === "calculate"){
    const secondValue = displayedNum;
    const operator = calculator.dataset.operator
    const firstValue = calculator.dataset.firstValue
    
    calculator.dataset.previousKeyType = 'calculate'
   display.textContent = calculate(firstValue, operator, secondValue)
  }
  }
})