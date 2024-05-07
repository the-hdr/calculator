let previousAnswer = "";
let currentExpression = "";

let operatorUsed = false;

let buttons = document.querySelectorAll (".button");

function extendExpression (event)
{
    let buttonId = event.target.id;
    let buttonClass = event.target.className;

    //alert ("ID: " + buttonId);
}

buttons.forEach (function (button) {
    button.addEventListener ("click", function (event) {
        extendExpression (event);
    });
})