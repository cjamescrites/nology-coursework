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

    let firstNumArr = [];
    let operator = "";
    let secondNumArr = [];

    // Button Events
    clear.addEventListener("click", () => {
        output.innerHTML = '';
        firstNumArr = [];
        secondNumArr = [];
        operator = "";
    });

    add.addEventListener("click", () => {
        output.innerHTML += "+";
        operator = "+";
    });

    subtract.addEventListener("click", () => {
        output.innerHTML += "-";
        operator = "-";
    });

    multiply.addEventListener("click", () => {
        output.innerHTML += "*";
        operator = "*";
    });

    divide.addEventListener("click", () => {
        output.innerHTML += "/";
        operator = "/";
    });

    decimal.addEventListener("click", () => {
        output.innerHTML += ".";
        if (operator == "") {
            firstNumArr.push(".")
        } else {
            secondNumArr.push(".")
        }
    });

    zero.addEventListener("click", () => {
        output.innerHTML += "0";
        if (operator == "") {
            firstNumArr.push(0);
    } else { 
            secondNumArr.push(0);
    }});

    one.addEventListener("click", () => {
        output.innerHTML += "1";
        if (operator == "") { 
            firstNumArr.push(1);
    } else {
            secondNumArr.push(1);
    }});

    two.addEventListener("click", () => {
        output.innerHTML += "2";
        if (operator == "") {
            firstNumArr.push(2);
    } else { 
            secondNumArr.push(2);
    }});

    three.addEventListener("click", () => {
        output.innerHTML += "3";
        if (operator == "") {
            firstNumArr.push(3);
    } else { 
            secondNumArr.push(3);
    }});

    four.addEventListener("click", () => {
        output.innerHTML += "4";
        if (operator == "") {
            firstNumArr.push(4);
    } else { 
            secondNumArr.push(4);
    }});

    five.addEventListener("click", () => {
        output.innerHTML += "5";
        if (operator == "") {
            firstNumArr.push(5);
    } else { 
            secondNumArr.push(5);
    }});

    six.addEventListener("click", () => {
        output.innerHTML += "6";
        if (operator == "") {
            firstNumArr.push(6);
    } else { 
            secondNumArr.push(6);
    }});

    seven.addEventListener("click", () => {
        output.innerHTML += "7";
        if (operator == "") {
            firstNumArr.push(7);
    } else { 
            secondNumArr.push(7);
    }});

    eight.addEventListener("click", () => {
        output.innerHTML += "8";
        if (operator == "") {
            firstNumArr.push(8);
    } else { 
            secondNumArr.push(8);
    }});

    nine.addEventListener("click", () => {
        output.innerHTML += "9";
        if (operator == "") {
            firstNumArr.push(9);
    } else { 
            secondNumArr.push(9);
    }});

    const runOperation = () => { 
        firstNum = Number(firstNumArr.join(''));
        secondNum = Number(secondNumArr.join(''));
        if (operator == "+") {
            total = firstNum + secondNum;
        } else if (operator == "-") {
            total = firstNum - secondNum;
        } else if (operator == "*") {
            total = firstNum * secondNum;
         } else if (operator == "/") {
            total = firstNum / secondNum;
    }
    output.innerHTML = total;
};
  

    equals.addEventListener("click", runOperation);