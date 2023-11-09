let button = document.getElementById("evaluation-button");
button.addEventListener ("click", evaluate);

function evaluate()
{
    let userInput = document.getElementById('userInput').value;
    let evaluatedResult = eval(userInput);

    document.getElementById("result").textContent = "Result: " + evaluatedResult;
}