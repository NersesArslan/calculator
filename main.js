const calculate = (n1, operator, n2) => {
  const firstNum = parseFloat(n1)
  const secondNum = parseFloat(n2)
  if(operator === 'add')return firstNum + secondNum
  if(operator === 'subtract')return firstNum - secondNum
  if(operator === 'multiply')return firstNum * secondNum
  if(operator === 'divide')return firstNum / secondNum
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

        //what happend when user clicks on a number
  if(!action) {
    calculator.dataset.previousKeyType = 'number'
    if(displayedNum === '0' || 
       previousKeyType === 'operator' ||
       previousKeyType === 'calculate'
    ){
      display.textContent = keyContent;
    } else {
      display.textContent = displayedNum + keyContent
    }
    
  } 
  //  what happens when user clicks on an operator
  if(
    action === 'add' ||
    action === 'subtract' ||
    action === "multiply" ||
    action === "divide"
  ){
    const firstValue = calculator.dataset.firstValue
    const operator = calculator.dataset.operator
    const secondValue = displayedNum

    if(
      firstValue &&
      operator && 
      previousKeyType !== 'operator' &&
      previousKeyType !== 'calculate'
    ){
      const calcValue  = calculate(firstValue, operator, secondValue)
      display.textContent = calcValue
      calculator.dataset.firstValue = calcValue
    } else {
      calculator.dataset.firstValue = displayedNum
    }
    key.classList.add('is-depressed')
    calculator.dataset.previousKeyType = "operator"
    calculator.dataset.operator = action
  }
  if(action !== 'clear'){
    const clearButton = calculator.querySelector('[data-action=clear]')
    clearButton.textContent = 'CE'
  }
  if(action === "clear"){
    if(key.textContent === 'CE'){
      calculator.dataset.firstValue = ''
      calculator.dataset.modValue = ''
      calculator.dataset.operator = ''
      calculator.dataset.previousKeyType = ''
    
      key.textContent = 'AC'
    }

    display.textContent = 0
    calculator.dataset.previousKeyType = 'clear'
    
  } 
  if (action === "decimal"){
    if(previousKeyType === "operator" ||
       previousKeyType === 'calculate'
       ){
      display.textContent = '0.'
    } else if (!displayedNum.includes('.')){
      display.textContent = displayedNum + '.'
    } 
    
    calculator.dataset.previousKeyType = 'decimal'
  } 
  
   if(action === 'calculate'){
    let firstValue = calculator.dataset.firstValue
    const operator = calculator.dataset.operator
    let secondValue = displayedNum

    

    if(firstValue){
      if(previousKeyType === 'calculate'){
        firstValue = displayedNum
        secondValue = calculator.dataset.modValue
        
      }
      if(operator === 'divide' && secondValue === '0'){
        display.textContent = 'Nice Try'
      } else {
      display.textContent = calculate(firstValue, operator, secondValue)
      }
    }
   
    calculator.dataset.modValue = secondValue
    calculator.dataset.previousKeyType = 'calculate'
    
   
  }
  }
})