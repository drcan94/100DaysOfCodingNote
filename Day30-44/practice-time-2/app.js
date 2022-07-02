const calcButton = document.body.children[1].children[3];
const resultEl = document.getElementById("calculated-sum");
const inputEl = document.getElementById("user-number");

const eventListeners = () => {
  calcButton.addEventListener("click", () => {
    let enteredNumber = Number(inputEl.value);
    let totalValue = (enteredNumber * (enteredNumber + 1)) / 2;
    // ne gerek var bilmiyorum ama for döngüsüyle de yapılabilir tabi :)
    resultEl.textContent = totalValue;
    resultEl.style.display = "block";
  });

  highlightedButton.addEventListener("click", () => {
    for (const a of anchorTags) {
      a.classList.add("highlight");
    }
  });

  displayButton.addEventListener("click", () => {
    outputList.innerHTML = "";
    // her basışta aynı şeyi eklemesin diye başta sıfırlıyoruz
    for (const key in dummyData) {
      const liElement = document.createElement("li");
      let text;
      switch (key) {
        case "firstName":
          text = `First Name: ${dummyData[key]}`;
          break;
        case "lastName":
          text = `Last Name: ${dummyData[key]}`;
          break;
        case "age":
          text = `Age: ${dummyData[key]}`;
          break;

        default:
          text = `Marital Status: ${dummyData[key]}`;
          break;
      }
      liElement.textContent = text;
      outputList.appendChild(liElement);
    }
  });

  rollTheDiceButton.addEventListener("click", deriveNumberOfDiceRolls);
};

// ------------------------------
// Highlighted links
// ------------------------------

const highlightedButton = document.querySelector("#highlight-links button");
const anchorTags = document.querySelectorAll("#highlight-links p a");

// eventi yukardaki eventListeners içinde tanıml adım..
// eventListeners fonksyionu en aşağıda çağrıldığı
// sürece sorun olmaz :)

// ------------------------------
// Display Data
// ------------------------------

const dummyData = {
  firstName: "Burak",
  lastName: "CAN",
  age: 28,
  maritalStatus: "Married",
};

const displayButton = document.querySelector("#user-data button");
const outputList = document.querySelector("#output-user-data");

// ------------------------------
// Statistics
// ------------------------------

const rollTheDiceButton = document.querySelector("#statistics button");
const userTargetInput = document.querySelector("#user-target-number");
const totalRolls = document.getElementById("output-total-rolls");
const rollsListElement = document.getElementById("dice-rolls");
const targetNumberSpan = document.getElementById("output-target-number");
const newGameButton = document.getElementById("new-game");

const generateRandom = (min = 1, max = 6) => {
  let difference = max - min + 1;
  // max da dahil olsun diye => [1,6]
  // 1 eklemezsek sadece min dahil olur => [1,6)
  // ikisi de dahil olmasın dersek 1 çıkarmamız gerekirdi => max - min - 1 ==> (1,6)
  let rand = Math.random();
  rand = Math.floor(rand * difference);
  rand = rand + min;
  return rand;
};

const deriveNumberOfDiceRolls = () => {
  let usertargetNumber = userTargetInput.value;

  if (usertargetNumber === "") {
    alert("Please type a number");
  } else {
    rollsListElement.innerHTML = "";
    let hasRolled = false;
    let total = 0;
    while (!hasRolled) {
      const randomNumber = generateRandom(1, 6);
      total++;
      const newRollListItem = document.createElement("li");
      const outputText = `Roll ${total}: ${randomNumber}`;
      newRollListItem.textContent = outputText;
      rollsListElement.append(newRollListItem);
      hasRolled = randomNumber === +usertargetNumber;
      // +"2" => means Number("2")
    }

    targetNumberSpan.textContent = usertargetNumber;
    totalRolls.textContent = total;
  }
};

eventListeners();
