const container = document.querySelector(".container");
const outputDiv = document.createElement("div");
outputDiv.classList.add("outputDiv");
container.appendChild(outputDiv);
const outputLabel = document.createElement("label");
outputLabel.classList.add("outputLabel");
outputDiv.appendChild(outputLabel);
outputLabel.innerText = "0";
const inputButtons = document.createElement("div");
inputButtons.classList.add("inputButtons");
container.appendChild(inputButtons);
const items = [
    "^2",
    "AC",
    "C",
    "/",
    7,
    8,
    9,
    "*",
    4,
    5,
    6,
    "-",
    1,
    2,
    3,
    "+",
    0,
    ".",
    "%",
    "=",
];
items.map((i) => {
    const child = document.createElement("button");
    child.classList.add("inputValueButton");
    child.setAttribute("value", `${i}`);
    const grandChild = document.createTextNode(`${i}`);
    child.appendChild(grandChild);
    inputButtons.appendChild(child);
    if (i == "AC" || i == "^2" || i == "C") child.classList.add("grey");
    if (i == "/" || i == "*" || i == "-" || i == "+" || i == "=")
        child.classList.add("orange");
    child.addEventListener("click", handleClickEvents);
});
let expression = "";
let result;
function handleClickEvents(e) {
    const value = e.target.value;
    if (value == "AC") {
        expression = "";
        outputLabel.innerText = 0;
        return;
    }
    if (value == "C") {
        expression = expression.slice(0, -1);
        outputLabel.innerText = expression || "0";
        return;
    }
    if (value == "^2") {
        expression = (parseFloat(expression) ** 2).toString();
    }
    if (e.target.value == "=") {
        result = eval(expression);
        outputLabel.innerText = result;
        return;
    }
    expression += e.target.value;
    outputLabel.innerText = expression;
}
