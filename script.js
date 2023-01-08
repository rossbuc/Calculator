function div(a, b) {
    ans = a/b;
    document.querySelector(".answer").innerHTML = ans;
    return ans
}

function add(a, b) {
    ans = a + b;
    document.querySelector(".answer").innerHTML = ans;
    return ans
}

function multiply(a, b) {
    ans = a * b;
    document.querySelector(".answer").innerHTML = ans;
    return ans
}

function subtract(a, b) {
    ans = a - b;
    document.querySelector(".answer").innerHTML = ans;
    return ans
}

function operate(operator, a, b) {
    if (operator == "times") {
        multiply(a, b);
    }
    else if (operator == "divide") {
        div(a, b);
    }
    else if (operator == "add") {
        add(a, b);
    }
    else if (operator == "sub") {
        subtract(a, b);
    }
}

function display(obj) {
    document.querySelector(".answer").innerHTML += obj.textContent;
}

function store() {
    if (this.id == "equals") {
        operate(operator, a, document.querySelector(".answer").textContent)
    }
    else {
        operator = this.id;
        a = document.querySelector(".answer").textContent;
        document.querySelector(".answer").textContent = "";
        return a, operator
    }
}

function clear() {
    document.querySelector(".answer").textContent = "";
}

document.getElementById("equals").addEventListener("click", store);
document.getElementById("add").addEventListener("click", store);
document.getElementById("sub").addEventListener("click", store);
document.getElementById("divide").addEventListener("click", store);
document.getElementById("times").addEventListener("click", store);
document.getElementById("clear").addEventListener("click", clear)
