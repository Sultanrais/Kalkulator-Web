let currentInput = '';
let memory = 0;
let previousInput = '';
let operation = null;

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function setOperation(op) {
    operation = op;
    previousInput = currentInput;
    currentInput = '';
    updateDisplay();
}

function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

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
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operation = null;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('result').value = currentInput;
}

// Fungsi Memory
function clearMemory() {
    memory = 0;
}

function recallMemory() {
    currentInput = memory.toString();
    updateDisplay();
}

function addMemory() {
    memory += parseFloat(currentInput) || 0;
}

function subtractMemory() {
    memory -= parseFloat(currentInput) || 0;
}