const defaultResult = 0;
let currentResult = defaultResult;
let result;

function getUserNumberInput()
{
     return parseInt(userInput.value)
}

function crateAndWriteOutput(operator, resultBeforeCalc, calcNumber)
{
    const calcDescription = `${resultBeforeCalc} + ${operator} + ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

function add()
{
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult + enteredNumber;
    crateAndWriteOutput('+', initialResult, enteredNumber)
}


function subtract()
{
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult - enteredNumber;
    crateAndWriteOutput('-', initialResult, enteredNumber)
}

function multiply()
{
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult * enteredNumber;
    crateAndWriteOutput('*', initialResult, enteredNumber)
}

function divide()
{
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult / enteredNumber;
    crateAndWriteOutput('/', initialResult, enteredNumber)
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);


