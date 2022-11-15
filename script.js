function div(a, b) {
    ans = a/b;
    return ans
}

function add(a, b) {
    ans = a + b;
    return ans
}

function multiply(a, b) {
    ans = a * b;
    return ans
}

function subtract(a, b) {
    ans = a - b;
    return ans
}

function operate(operator, a, b) {
    if (operator == mult) {
        multiply(a, b);
    }
    else if (operator == divide) {
        div(a, b);
    }
    else if (operator == ad) {
        add(a, b);
    }
    else if (operator == sub) {
        subtract(a, b);
    }
}

function display(obj) {
    document.querySelector(".answer").innerHTML = obj.textContent;
}


document.getElementById("equals").addEventListener("click", store);
document.getElementById("add").addEventListener("click", store);
document.getElementById("sub").addEventListener("click", store);
document.getElementById("divide").addEventListener("click", store);
document.getElementById("times").addEventListener("click", store);


function store() {
    console.log("it works")
}
