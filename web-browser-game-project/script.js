// ---------- Display ---------
// ✓ need to store buttons to be able to be clicked
// ✓ display hidden, clicked, and update value innerHTML
// ✓ need to target buttons and apply an X or O
// ✓ update innerHTML with an X or O
// ✓ not allow played squares to be changed
// ✓ needs option to select between singleplayer and multiplayer
// ✓ once option is selected run appropriate functions & option buttons disappear
// ---------- Multi-Player ----------
// ✓ need to switch between X and O per click to simulate turns
// ---------- Single-Player ----------
// ✓ need a basic AI that'll pick random squares that aren't selected
// ✓ add delay between user and "ai" turn
// ---------- Win Conditions ----------
// ✓ need to detect if X or O takes up three spaces in a row/column/diagonally to determine winner
// ✓ if/else every possible winning solution
// ✓ displays message of X/O winner
// ---------- Tie Condition ----------
// ✓ need to detect if no spots are available and neither X nor O is taking up three to determine a tie
// ✓ if all grid areas have a value of X/O and no winner detected
// ---------- Reset Condition ----------
// ✓ need to reset the game without refreshing
// ✓ button that sets all values back to 0
// ✓ needs to prompt single/multi player option again


const playBoard = document.querySelector(".play-board")
const playableSquares = document.querySelectorAll(".playable");
const playableSquaresR = Array.from(playableSquares);
//on screen buttons
const multiPlayer = document.querySelector("#multi-player");
const singlePlayer = document.querySelector("#single-player");
const squares = document.querySelectorAll(".square");
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

// Multi-Player Functions ----------------------------------------------------------
// button assignment on click(X/O), stores Value of click
const xClick = (xo) => {
  xo.innerHTML = "X";
  xo.value = 1;
  currentValue = 1;
  xo.classList.remove("playable");
  xo.classList.add("x");
};

const oClick = (xo) => {
  xo.innerHTML = "O";
  xo.value = 2;
  currentValue = 2;
  xo.classList.remove("playable");
  xo.classList.add("o");
};

// checks current value to determine whether to assign X or O, doesn't played buttons to be changed
const pvpDisplay = (xo) => {
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

const pvp = (xo) => {
    pvpDisplay(xo);
}

// Single-Player Functions ------------------------------------------------------------------------------
// randomly picks a playable square, assigns appropriate values, removes playable class from square
const aiChoice = () => {
  const playableSquaresArr = playableSquaresR.filter((playable) => {
    return playable.classList.contains("playable");
  })
  let randomO = Math.floor(Math.random()*playableSquaresArr.length);
    playableSquaresArr[randomO].innerHTML = "O";
    playableSquaresArr[randomO].value = 2;
    playableSquaresArr[randomO].classList.add("o");
    playableSquaresArr[randomO].classList.remove("playable");
    currentValue = 2;
    playedSquares.push(2);
};

const aiClick = () => {
  setTimeout(aiChoice,750);
};


const pveDisplay = (xo) => {
  if (xo.innerHTML != "X" && xo.innerHTML != "O") {
    if (currentValue == 0 || currentValue == 2) {
      xClick(xo);
      playedSquares.push(1);
}; console.log(currentValue);
}};

const pve = (xo) => {
    pveDisplay(xo);
    aiClick();
}

// win conditions ------------------------------------------------------------------
// what happens when X/O wins
const xWin = () => {
  winMessage.innerHTML = "X Wins!";
  squares.forEach((xo) => {
    if (xo.classList.contains("x")) {
     xo.classList.add("winner");  
     xo.classList.remove("x");
  }})};

const oWin = () => {
  winMessage.innerHTML = "O Wins!";
  squares.forEach((xo) => {
   if (xo.classList.contains("o")) {
    xo.classList.add("winner");  
    xo.classList.remove("o");
 }})};


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


// game mode selection
let multiplayer = 0;

const multiplayerOption = () => {
multiPlayer.addEventListener("click", () => {
  singlePlayer.classList.add("hidden");
  multiPlayer.classList.add("hidden");
  playBoard.classList.remove("hidden");
  multiplayer = 2;
  playerChoice();
})};
  

const multiplayerMode = () => {
  squares.forEach((xo) => {
    xo.addEventListener("click", () => {
    pvp(xo);
    win();
    tie();
  });
});
};

const singleplayerOption = () => {
  singlePlayer.addEventListener("click", () => {
    singlePlayer.classList.add("hidden");
    multiPlayer.classList.add("hidden");
    playBoard.classList.remove("hidden");
    multiplayer = 1;
    playerChoice();
})};

const singleplayerMode = () => {
  squares.forEach((xo) => {
    xo.addEventListener("click", () => {
      pve(xo);
      win();
      tie();
    });
  });
};

const playerChoice = () => {
  if (multiplayer == 2) {
    multiplayerMode();
  } else if (multiplayer == 1) {
    singleplayerMode();
  }
}

multiplayerOption();
singleplayerOption();


// clear function
// const clearBoard = () => {
//     multiplayer = 0;
//     currentValue = 0;
//     playedSquares = [];
//     winMessage.innerHTML = '';
//     singlePlayer.classList.remove("hidden");
//     multiPlayer.classList.remove("hidden");
//     playBoard.classList.add("hidden");
//     squares.forEach((xo) => {
//         xo.innerHTML = '';
//         xo.value = '';
//         xo.classList.remove("x");
//         xo.classList.remove("o");
//         xo.classList.remove("winner");
//         xo.classList.add("playable");
// })};

restart.addEventListener("click", () =>{
    // clearBoard();
    location.reload();
});
