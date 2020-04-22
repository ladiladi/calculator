var prevNumInput = '';
var currentNumInput = '';
var result = '';
var currentOper = '';

function setOperatorListen() {
    const operatorButtons = Array.from(document.querySelectorAll("op-button"));
    operatorButtons.forEach(operatorButton => operatorButton.addEventListener("click", () => {
        if (prevNumInput !== '' && currentNumInput !== '') {
            updateDisplay(operate(prevNumInput, currentNumInput, currentOper));
        } else {
            return;
        }
    }));
    operatorButtons.forEach(operatorButton => operatorButton.addEventListener("click", storeInput));

    const addButton = document.querySelector("#add");
    addButton.addEventListener("click", () => currentOper = add);
    const addButton = document.querySelector("#subtract");
    subButton.addEventListener("click", () => currentOper = subtract);
    const addButton = document.querySelector("#multiply");
    multButton.addEventListener("click", () => currentOper = multiply);
    const addButton = document.querySelector("#divide");
    divideButton.addEventListener("click", () => currentOper = divide);
}
function setNumberListen() {

}

function updateDisplay() {

}





//BASIC FUNCTIONS

function add() {
    return number1 + number2;
}
function subtract() {
    return number1 - number2;
}
function multiply() {
    return number1 * number2;
}
function divide() {
    if (number2 == 0) {
        clearAll();
        return;
    }
    return number1 / number2;
}

function operate(operator, number1, number2) {
    switch(operator) {
        case 1: // Add
            add(number1, number2);
        case 2: // Subtract
            subtract(number1, number2);
        case 3: // Multiply
            multiply(number1, number2);
        case 4: // Divide
            divide(number1, number2);
    }
}