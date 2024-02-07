function add(num1, num2) {
    result = num1 + num2;
    return result;
}

function multiply(num1, num2) {
    result = num1 * num2;
    return result;
}

function subtract(num1, num2) {
    result = num1 - num2;
    return result;
}

function divide(num1, num2) {
    if (num2 === 0) {
        return "can't divide by 0"
    }  
    result = num1 / num2
    return result;
}

let num1 = 1;
let num2 = 1;
let operator = '';
let result = 0;

display = document.querySelector('.display');

function operate(operator, num2) {
    if (operator==='+') {
        result = add(result, num2)
        display.textContent = result
    } else if (operator==='*'){
        result = multiply(result, num2)
        display.textContent = result
    } else if (operator==='-') {
        result = subtract(result, num2)
        display.textContent = result
    } else if (operator === '/') {
        result = divide(result, num2)
        display.textContent = result
    } else {
        result = "Error: Invalid operator"
    }

    display.textContent = result
}

function addToDisplay(value) {
    if (display.textContent === '0') {
        display.textContent = value;
    } else {
        display.textContent += value;
    }
}

function operation(operator) {
    let currExpression = display.textContent;
    if (currExpression !== '0') {
        display.textContent += operator;
    }
}

function clearDisplay() {
    display.textContent = '0'
}

function calculate() {
    result = display.textContent
    res = eval(result)
    display.textContent = res
}