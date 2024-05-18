let previousAnswer = "";

let isEmpty = true;
let currentExpression = "0.00";

let operatorUsed = false;

let buttons = document.querySelectorAll (".button");

updateCurrentExpression (currentExpression);

buttons.forEach (function (button) {
    button.addEventListener ("click", function (event) {
        extendExpression (event);
    });
});

function extendExpression (event)
{
    let triggeringButtonId = event.target.id;
    let triggeringButtonClass = event.target.className;

    if (triggeringButtonClass == "clear-button")
    {
        currentExpression = "0.00";
        previousAnswer = "0.00";
    }
    else if (triggeringButtonClass == "delete-button")
    {
        if (currentExpression.length == 1)
        {
            currentExpression = "0.00";
        }
        else
        {
            currentExpression = currentExpression.substring (0, currentExpression.length - 1);
        }
    }

    // continue from here;
}

function updateCurrentExpression (newExpression)
{
    // update currentExpression:
    currentExpression = newExpression;

    let currentExpressionDiv = document.getElementById ("current-result");
    currentExpressionDiv.innerHTML = currentExpression;
}