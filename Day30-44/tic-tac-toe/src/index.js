import { openPlayerConfig } from "./config";
import { closePlayerConfig } from "./config";
import { confirmPlayerConfig } from "./config";
import { backdropEl } from "./config";
import { formElement } from "./config";
import { newGameStarter } from "./game";
import { selectGameField } from "./game";
import { showCurrentSymbol } from "./game";
import { hideCurrentSymbol } from "./game";

const editFirstPlayer = document.getElementById("edit-player-1-btn");
const editSecondPlayer = document.getElementById("edit-player-2-btn");

const cancelConfigPlayerBtn = document.getElementById(
  "cancel-config-player-btn"
);
// const confirmConfigPlayerBtn = document.getElementById(
//   "confirm-config-player-btn"
// );

export const newGameBtn = document.getElementById("new-game-btn");
export const gameFieldsElements = document.querySelectorAll("#game-board li");

const eventListeners = () => {
  editFirstPlayer.addEventListener("click", openPlayerConfig);
  editSecondPlayer.addEventListener("click", openPlayerConfig);

  cancelConfigPlayerBtn.addEventListener("click", closePlayerConfig);
  backdropEl.addEventListener("click", closePlayerConfig);
  // confirmConfigPlayerBtn.addEventListener("click", confirmPlayerConfig)
  formElement.addEventListener("submit", confirmPlayerConfig);
  newGameBtn.addEventListener("click", newGameStarter);
  gameFieldsElements.forEach((LiElemet) => {
    // li leri değil de tüm game board ı seçersek aradaki boşluklara
    // tıklanmadığını kontrol etmemiz gerekir.. bu da selectGameField
    // fonksiyonunda e.target.tagName !== "LI" olduğunda return ile sonlandırarak
    // kontrol edilebilir

    // buradaki forEach ile her bir li yi ayrı ayrı döner ve sadece onlara
    // tıklandığında fonksiyon çalışır

    LiElemet.addEventListener("click", selectGameField);
    // dynamic hovering yapıyorum :)
    LiElemet.addEventListener("mouseover", showCurrentSymbol);
    LiElemet.addEventListener("mouseout", hideCurrentSymbol);
    
  });
};

eventListeners();
