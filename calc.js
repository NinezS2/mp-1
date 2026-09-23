function getNumbers(){
    let first = Number(document.getElementById("first-number").value);
    let second = Number(document.getElementById("second-number").value);

    return [first, second];
}

function showResult(result){
    let output = document.getElementById("output");

    output.innerHTML = String(result);

    if (result < 0){
        output.style.color = "red";
    }
    else {
        output.style.color = "black";
    }
}

function addition() {
    let first = document.getElementById("first-number").value;
    let second = document.getElementById("second-number").value;

    first = Number(first);
    second = Number(second);

    let result = first + second;

    document.getElementById("output").innerHTML = String(result);
    checkNegative(result);
}

function subtraction() {
    let first = document.getElementById("first-number").value;
    let second = document.getElementById("second-number").value;

    first = Number(first);
    second = Number(second);

    let result = first - second;

    document.getElementById("output").innerHTML = String(result);
    checkNegative(result);
}

function multiplication() {
    let first = document.getElementById("first-number").value;
    let second = document.getElementById("second-number").value;

    first = Number(first);
    second = Number(second);

    let result = first * second;

    document.getElementById("output").innerHTML = String(result);
    checkNegative(result);
}

function division() {
    let first = document.getElementById("first-number").value;
    let second = document.getElementById("second-number").value;

    first = Number(first);
    second = Number(second);

    let result = first / second;

    document.getElementById("output").innerHTML = String(result);
    checkNegative(result);
}

function power() {
    let first = document.getElementById("first-number").value;
    let second = document.getElementById("second-number").value;

    first = Number(first);
    second = Number(second);

    let result = 1;

    for (let i = 0; i < second; i++) {
        result = result * first;
    }

    document.getElementById("output").innerHTML = String(result);
    checkNegative(result);
}

function clearCalculator() {
    document.getElementById("first-number").value = "";
    document.getElementById("second-number").value = "";
    document.getElementById("output").innerHTML = "";
}

function checkNegative(result) {
    if (result < 0) {
        document.getElementById("output").style.color = "red";
    } else {
        document.getElementById("output").style.color = "black";
    }
}