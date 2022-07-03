import { players } from "./config";
import { gameData } from "./config";
import { newGameBtn } from "./index";
import { gameFieldsElements } from "./index";

const activeGame = document.getElementById("active-game");
const activePlayerText = document.getElementById("active-player-name");
const playersWarning = document.getElementById("players-warning");
const gameOverEl = document.getElementById("game-over");
const winnerName = document.getElementById("winner-name");

let activePlayer = 1;
let winnerPlayer = 0;
let isOver = false;
let move = 0;

const switchPlayer = () => {
  move++;
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  activePlayerText.textContent = players[activePlayer].name;
};

const checkForGameOver = (data) => {
  // rows check
  data.forEach((row) => {
    if (row[0] > 0 && row[0] === row[1] && row[1] === row[2]) {
      winnerPlayer = row[0];
    }
  });

  // cols check
  let i = 0;
  data.forEach(() => {
    if (
      data[0][i] > 0 &&
      data[0][i] === data[1][i] &&
      data[1][i] === data[2][i]
    ) {
      winnerPlayer = data[0][i];
    }
    i++;
  });

  //   top left to right bottom check
  if (
    data[0][0] > 0 &&
    data[0][0] === data[1][1] &&
    data[1][1] === data[2][2]
  ) {
    winnerPlayer = data[1][1];
  }

  //   bottom left to right top check
  if (
    data[2][0] > 0 &&
    data[2][0] === data[1][1] &&
    data[1][1] === data[0][2]
  ) {
    winnerPlayer = data[2][0];
  }

  move === 9 && (isOver = true);
  console.log(move);

  return winnerPlayer;
};

let isStarted = false;

export const newGameStarter = (e) => {
  if (!isOver) {
    if (players[0].name && players[1].name) {
      !isStarted && switchPlayer(); // initialState i değiştirir ama ismi de ekrana yazdırır.. ilk kim gelsin istiyorsak diğerini initial olarak atayabiliriz :)
      activeGame.style.display = "block";

      playersWarning.style.display = "none";
      isStarted = true;

      newGameBtn.style.display = "none";
    } else {
      playersWarning.style.display = "block";
    }
  } else {
    // oyun bittiyse herşeyi sıfırlıyoruz

    isOver = false;
    isStarted = false;
    move = 0;
    winnerPlayer = 0;
    switchPlayer(); // her oyunda farklı bir oyuncu başlatıyor ve ismini yazdırıyoruz
    gameData[0] = [0, 0, 0];
    gameData[1] = [0, 0, 0];
    gameData[2] = [0, 0, 0];
    gameFieldsElements.forEach((LiElemet) => {
      LiElemet.textContent = "";
      LiElemet.classList.remove("disabled");
    });
    gameOverEl.style.display = "none";
    winnerName.textContent = "";
    activePlayerText.parentElement.style.display = "block";
    newGameBtn.style.display = "none";
  }
};

export const showCurrentSymbol = (e) => {
  let elRow = e.target.dataset.row;
  let elCol = e.target.dataset.col;
  if (gameData[elRow - 1][elCol - 1] > 0) {
    // tıklanmışsa çalışmasın
    return;
  }
  e.target.textContent = players[activePlayer].symbol;
};

export const hideCurrentSymbol = (e) => {
  let elRow = e.target.dataset.row;
  let elCol = e.target.dataset.col;
  if (gameData[elRow - 1][elCol - 1] > 0) {
    // tıklanmışsa çalışmasın
    return;
  }
  e.target.textContent = "";
};

export const selectGameField = (e) => {
  const selectedEl = e.target;
  const selectedRow = +selectedEl.dataset.row;
  const selectedColumn = +selectedEl.dataset.col; // dataset["col"] da olur.. "-" yoksa kullanılabilir
  if (gameData[selectedRow - 1][selectedColumn - 1] > 0) {
    // tıklanmışsa çalışmasın
    return;
  }

  if (!isOver) {
    selectedEl.textContent = players[activePlayer].symbol;
    selectedEl.classList.add("disabled");
    gameData[selectedRow - 1][selectedColumn - 1] = activePlayer + 1;
    checkForGameOver(gameData);
  }
  if (winnerPlayer === 1 || winnerPlayer === 2) {
    isOver = true;
    move = 0;
    document.getElementById("draw").style.display = "none";
    gameOverEl.firstElementChild.style.display = "block";
    gameOverEl.style.display = "block";
    winnerName.textContent = players[winnerPlayer - 1].name;
    activePlayerText.parentElement.style.display = "none";
    newGameBtn.style.display = "inline-block";

    return;
  } else if (move === 9 && winnerPlayer === 0) {
    move = 0;
    gameOverEl.style.display = "block";
    gameOverEl.firstElementChild.style.display = "none";
    document.getElementById("draw").style.display = "block";
    activePlayerText.parentElement.style.display = "none";
    newGameBtn.style.display = "inline-block";
    return;
  } else {
    switchPlayer();
  }
};
