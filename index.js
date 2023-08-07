function add(a, b) {
    return a + b;
}
function subtract (a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
//reset number
number = 10;

function add5() {
    return (number += 5);
}
function divideBy3() {
    return (number /= 3);
}

divideBy3();

add5();

//reset number
number = 10;

add5();

divideBy3();

function increment(n) {
    return (n += 1);
}
function decrement(n) {
    return (n -= 1);
}

function makeInt(string) {
    return (parseInt(string, 10));
}
function preserveDecimal(string) {
    return (parseFloat(string));
}