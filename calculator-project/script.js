// assign each button as a DOM variable.
// run operator values thru and do a if/else to assign a math function
// as you click the button it needs to show on the output.
// once equal is clicked the math function answer appears as output.

// DOM Selectors
    const output = document.querySelector("p");
    const clear = document.querySelector(".ac");
    const add = document.querySelector(".add");
    const subtract = document.querySelector(".subtract");
    const multiply = document.querySelector(".multiply");
    const divide = document.querySelector(".divide");
    const equals = document.querySelector(".equals");
    const decimal = document.querySelector(".decimal");
    const zero = document.querySelector(".zero");
    const one = document.querySelector(".one");
    const two = document.querySelector(".two");
    const three = document.querySelector(".three");
    const four = document.querySelector(".four");
    const five = document.querySelector(".five");
    const six = document.querySelector(".six");
    const seven = document.querySelector(".seven");
    const eight = document.querySelector(".eight");
    const nine = document.querySelector(".nine");

    // Button Events
    clear.addEventListener("click", () => {
        output.innerHTML = '';
    });

    add.addEventListener("click", () => {
        output.innerHTML += " + ";
    });

    subtract.addEventListener("click", () => {
        output.innerHTML += " - ";
    });

    multiply.addEventListener("click", () => {
        output.innerHTML += " * ";
    });

    divide.addEventListener("click", () => {
        output.innerHTML += " / ";
    });

    decimal.addEventListener("click", () => {
        output.innerHTML += ".";
    });

    zero.addEventListener("click", () => {
        output.innerHTML += "0";
    });

    one.addEventListener("click", () => {
        output.innerHTML += "1";
    });

    two.addEventListener("click", () => {
        output.innerHTML += "2";
    });

    three.addEventListener("click", () => {
        output.innerHTML += "3";
    });

    four.addEventListener("click", () => {
        output.innerHTML += "4";
    });

    five.addEventListener("click", () => {
        output.innerHTML += "5";
    });

    six.addEventListener("click", () => {
        output.innerHTML += "6";
    });

    seven.addEventListener("click", () => {
        output.innerHTML += "7";
    });

    eight.addEventListener("click", () => {
        output.innerHTML += "8";
    });

    nine.addEventListener("click", () => {
        output.innerHTML += "9";
    });
