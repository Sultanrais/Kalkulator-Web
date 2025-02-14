let currentInput = '0';
let previousInput = '';
let operation = null;
let newCalculation = false;

function appendNumber(number) {
    if (newCalculation) {
        currentInput = '0';
        newCalculation = false;
    }

    if (currentInput === '0' && number !== '.') {
        currentInput = number;
    } else if (number === '.' && !currentInput.includes('.')) {
        currentInput += number;
    } else if (number !== '.') {
        currentInput += number;
    }
    updateDisplay();
}

function setOperation(op) {
    if (previousInput !== '') {
        calculate();
    }
    operation = op;
    previousInput = currentInput;
    currentInput = '0';
    updateDisplay();
    document.getElementById('previous-operand').textContent = `${previousInput} ${operation}`;
}

function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(current)) return;

    switch(operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
    }

    currentInput = result.toString();
    operation = null;
    previousInput = '';
    newCalculation = true;
    document.getElementById('previous-operand').textContent = '';
    updateDisplay();
}

function clearDisplay() {
    currentInput = '0';
    previousInput = '';
    operation = null;
    document.getElementById('previous-operand').textContent = '';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('current-operand').textContent = currentInput;
}

function toggleSign() {
    currentInput = (parseFloat(currentInput) * -1).toString();
    updateDisplay();
}

function calculatePercentage() {
    currentInput = (parseFloat(currentInput) / 100).toString();
    updateDisplay();
}