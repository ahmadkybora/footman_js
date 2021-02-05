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

function calculateResult(calculateType)
{
    const enteredNumber = getUserNumberInput();
    if
    (
        calculateType !== 'ADD' &&
        calculateType !== 'SUBTRACT' &&
        calculateType !== 'MULTIPLY' &&
        calculateType !== 'DIVIDE' ||
        !enteredNumber
    )
    {
        return;
    }

    if
    (
        calculateType === 'ADD' ||
        calculateType === 'SUBTRACT' ||
        calculateType === 'MULTIPLY' ||
        calculateType === 'DIVIDE'
    ) {
        const enteredNumber = getUserNumberInput();
        const initialResult = currentResult;
        let mathOperator;

        if (calculateType === 'ADD') {
            currentResult += enteredNumber;
            mathOperator = '+';
        } else if (calculateType === 'SUBTRACT') {
            currentResult -= enteredNumber;
            mathOperator = '-';
        } else if (calculateType === 'MULTIPLY') {
            currentResult *= enteredNumber;
            mathOperator = '*';
        } else if (calculateType === 'DIVIDE') {
            currentResult /= enteredNumber;
            mathOperator = '/';
        }

        crateAndWriteOutput(mathOperator, initialResult, enteredNumber);
    }
}

function add()
{
    calculateResult('ADD')
}

function subtract()
{
    calculateResult('SUBTRACT')
}

function multiply()
{
    calculateResult('MULTIPLY')
}

function divide()
{
    calculateResult('DIVIDE')
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);


