const display = document.getElementById("displayPart");
const numberButtons = document.querySelectorAll("#buttons button");
const operatorButtons = document.querySelectorAll("#operators button");
const equalsButton = document.getElementById("summationButton");
const clearButton = document.getElementById("clearButton");

let currentInput = "";
let previousInput = "";
let operator = "";

function updateDisplay() {
    display.innerHTML = currentInput || "0";
}

function handleNumberClick(e) {
    const number = e.target.innerText;

    if (currentInput === "0") {
        currentInput = number;
    } else {
        currentInput += number;
    }

    updateDisplay();
}

function handleOperatorClick(e) {
    if (currentInput === "") return;

    if (previousInput && operator) {
        calculate();
    }

    operator = e.target.innerText;
    previousInput = currentInput;
    currentInput = "";
}

function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (operator === "+") {
        result = prev + current;
    } else if (operator === "-") {
        result = prev - current;
    } else if (operator === "*") {
        result = prev * current;
    } else if (operator === "/") {
        result = prev / current;
    }

    currentInput = result.toString();
    previousInput = "";
    operator = "";

    updateDisplay();
}

function handleEqualsClick() {
    if (previousInput && currentInput) {
        calculate();
    }
}

function handleClearClick() {
    currentInput = "";
    previousInput = "";
    operator = "";
    updateDisplay();
}

numberButtons.forEach(button => {
    button.addEventListener("click", handleNumberClick);
});

operatorButtons.forEach(button => {
    button.addEventListener("click", handleOperatorClick);
});

equalsButton.addEventListener("click", handleEqualsClick);
clearButton.addEventListener("click", handleClearClick);

updateDisplay();