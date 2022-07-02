const playerConfigModal = document.getElementById("config-overlay");

export const backdropEl = document.getElementById("backdrop");
export const formElement = document.querySelector("form");

const errorsOutputElement = document.getElementById("config-errors");

let editedPlayer = 0;

export const players = [
  {
    name: "",
    symbol: "X",
  },
  {
    name: "",
    symbol: "O",
  },
];


export const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];


// comment olan kısımları ben düşünmüştüm.. bence daha kolay öyle
// ama hoca FormData API'ını ve data-id attr'ünü kullanmayı tercih etti..
// biraz uzun ama daha sürdürülebilir bir kod oluyor böyle sanırım :)

export const openPlayerConfig = (e) => {
  // e.target.getAttribute("data-playerId")
  // bunun yerine dataset ile erişebiliyoruz;

  editedPlayer = +e.target.dataset["playerid"];

  playerConfigModal.style.display = "block";
  backdropEl.style.display = "block";
  // currentPlayerName = e.target.parentElement.children[1];
};

export const closePlayerConfig = () => {
  playerConfigModal.style.display = "none";
  backdropEl.style.display = "none";
  errorsOutputElement.style.display = "none";
  errorsOutputElement.textContent = "";
  formElement.firstElementChild.classList.remove("error");
  formElement.firstElementChild.children[1].value = "";
};

export const confirmPlayerConfig = (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  // formun kendisine ulaşıp "name" attr lerine göre "get" ile
  // inputların value larına ulaşacağız

  const enteredName = formData.get("player-name").trim();
  // trim ile baştaki ve sondak boşlukları sildik

  if (!enteredName) {
    e.target.firstElementChild.classList.add("error");

    errorsOutputElement.style.display = "block";
    errorsOutputElement.textContent = "Lütfen Bir İsim Giriniz!";
    return;
  }
  e.target.firstElementChild.classList.remove("error");
  errorsOutputElement.style.display = "none";
  const currentPlayer = document.getElementById(
    `player-${editedPlayer}-config`
  );
  currentPlayer.children[1].textContent = enteredName;

  players[editedPlayer - 1].name = enteredName;

  closePlayerConfig();
};
