const defaultResult = 0;
let currentResult = defaultResult;
let result;

function getUserNumberInput()
{
     return parseInt(userInput.value)
}

function add()
{
    const enteredNumber = getUserNumberInput();
    const calcDescription = `${currentResult} + ${enteredNumber}`;
    result = currentResult + parseInt(userInput.value());
    outputResult(currentResult, calcDescription);
}

addBtn.addEventListener('click', add);


