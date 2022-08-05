// ✓ need to store buttons to be able to be clicked
//   ✓  display hidden, clicked, and update value innerHTML
// ✓ need to target buttons and apply an X or O
//  ✓   update innerHTML with an X or O
// ✓ need to switch between X and O per click to simulate turns
    // ✓ not allow played squares to be changed
// need to detect if X or O takes up three spaces in a row/column/diagonally to determine winner
    // if/else every possible winning solution
// need to detect if no spots are available and neither X nor O is taking up three to determine a tie
    // if all grid areas have a value of X/O and no winner detected
// need to reset the game without refreshing
    // button that sets all values back to 0

    const square = document.querySelectorAll(".square");
    const restart = document.querySelector(".restart");

    let currentValue = 0;

// Singe Player Functions
    // button assignment on click(X/O), stores Value of click
    const xClick = (xo) => {
        xo.innerHTML = "X"
        currentValue = 1;
        return currentValue;
    }

    const oClick = (xo) => {
        xo.innerHTML = "O";
        currentValue = 0;
        return currentValue;
    }

    // checks current value to determine whether to assign X or O, doesn't played buttons to be changed
    const displayXOSquare = (xo) => {
    if (xo.innerHTML != "X" && xo.innerHTML != "O") {
    if (currentValue == 0) {
        xClick(xo);
     } else if (currentValue = 1) {
        oClick(xo);
     }
     console.log(currentValue);
    }
    }

    square.forEach( (xo) => {
        xo.addEventListener("click", () => {
            displayXOSquare(xo);
        });
    });

    // win conditions

    const

