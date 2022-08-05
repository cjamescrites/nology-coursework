// ✓ need to store buttons to be able to be clicked
// ✓ display hidden, clicked, and update value innerHTML
// ✓ need to target buttons and apply an X or O
// ✓ update innerHTML with an X or O
// ✓ need to switch between X and O per click to simulate turns
// ✓ not allow played squares to be changed
// ✓ need to detect if X or O takes up three spaces in a row/column/diagonally to determine winner
// ✓ if/else every possible winning solution
// ✓ displays message of X/O winner
// ✓ need to detect if no spots are available and neither X nor O is taking up three to determine a tie
// ✓ if all grid areas have a value of X/O and no winner detected
// need to reset the game without refreshing
// button that sets all values back to 0

//on screen buttons
const square = document.querySelectorAll(".square");
const restart = document.querySelector(".restart");
const winMessage = document.querySelector("#win-message");
// top row
const topLeft = document.querySelector(".top-left");
const topCent = document.querySelector(".top-center");
const topRight = document.querySelector(".top-right");
// middle row
const midLeft = document.querySelector(".mid-left");
const midCent = document.querySelector(".mid-center");
const midRight = document.querySelector(".mid-right");
// bottom row
const botLeft = document.querySelector(".bot-left");
const botCent = document.querySelector(".bot-center");
const botRight = document.querySelector(".bot-right");

let currentValue = 0;
let playedSquares = [];

// Singe Player Functions
// button assignment on click(X/O), stores Value of click
const xClick = (xo) => {
  xo.innerHTML = "X";
  xo.value = 1;
  currentValue = 1;
  return currentValue;
};

const oClick = (xo) => {
  xo.innerHTML = "O";
  xo.value = 2;
  currentValue = 2;
  return currentValue;
};

// checks current value to determine whether to assign X or O, doesn't played buttons to be changed
const displayXOSquare = (xo) => {
  if (xo.innerHTML != "X" && xo.innerHTML != "O") {
    if (currentValue == 0 || currentValue == 2) {
      xClick(xo);
      playedSquares.push(1);
    } else if ((currentValue = 1)) {
      oClick(xo);
      playedSquares.push(2);
    }
  }
};

// win conditions
// what happens when X/O wins
const xWin = () => {
  winMessage.innerHTML = "X Wins!";
};
const oWin = () => {
  winMessage.innerHTML = "O Wins!";
};

// three-in-a-row outcomes
// row wins
const rowWin = () => {
  if (topLeft.value == 1 && topCent.value == 1 && topRight.value == 1) {
    xWin();
  } else if (topLeft.value == 2 && topCent.value == 2 && topRight.value == 2) {
    oWin();
  } else if (midLeft.value == 1 && midCent.value == 1 && midRight.value == 1) {
    xWin();
  } else if (midLeft.value == 2 && midCent.value == 2 && midRight.value == 2) {
    oWin();
  } else if (botLeft.value == 1 && botCent.value == 1 && botRight.value == 1) {
    xWin();
  } else if (botLeft.value == 2 && botCent.value == 2 && botRight.value == 2) {
    oWin();
  }
};

// column wins
const colWin = () => {
  if (topLeft.value == 1 && midLeft.value == 1 && botLeft.value == 1) {
    xWin();
  } else if (topLeft.value == 2 && midLeft.value == 2 && botLeft.value == 2) {
    oWin();
  } else if (topCent.value == 1 && midCent.value == 1 && botCent.value == 1) {
    xWin();
  } else if (topCent.value == 2 && midCent.value == 2 && botCent.value == 2) {
    oWin();
  } else if (
    topRight.value == 1 &&
    midRight.value == 1 &&
    botRight.value == 1
  ) {
    xWin();
  } else if (
    topRight.value == 2 &&
    midRight.value == 2 &&
    botRight.value == 2
  ) {
    oWin();
  }
};

// diagonal wins
const diaWin = () => {
  if (topLeft.value == 1 && midCent.value == 1 && botRight.value == 1) {
    xWin();
  } else if (topLeft.value == 2 && midCent.value == 2 && botRight.value == 2) {
    oWin();
  } else if (topRight.value == 1 && midCent.value == 1 && botLeft.value == 1) {
    xWin();
  } else if (topRight.value == 2 && midCent.value == 2 && botLeft.value == 2) {
    oWin();
  }
};

// calls all win possibilities
const win = () => {
    rowWin();
    colWin();
    diaWin();
}

// tie function
const tie = () => {
    if (playedSquares.length > 8 && winMessage.innerHTML != "X Wins!" && winMessage.innerHTML!= "O Wins!"){
        winMessage.innerHTML = "There is a Tie!";
}};

square.forEach((xo) => {
  xo.addEventListener("click", () => {
    displayXOSquare(xo);
    win();
    tie();
  });
});

const clearBoard = () => {
    currentValue = 0;
    playedSquares = [];
    winMessage.innerHTML = '';
    square.forEach((xo) => {
        xo.innerHTML = '';
        xo.value = '';
})};

restart.addEventListener("click", () =>{
    clearBoard();
});

console.log(playedSquares);