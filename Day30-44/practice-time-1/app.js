const removeButton = document.getElementsByTagName("button")[0];
// const removeButton = document.querySelector("button"); // ilk butonu alacak sayfadaki
const addingBGButton = document.getElementById("add-bg-btn");
const firstParagraph = document.body.children[2].children[1];
const thirdParagraph = document.body.children[2].children[3];

const eventListeners = () => {
  removeButton.addEventListener("click", () => {
    console.dir(removeButton);
    thirdParagraph.remove();
  });
  addingBGButton.addEventListener("click", (e) => {
    console.dir(e.target);
    firstParagraph.style.backgroundColor = "blue";
  });
};

eventListeners();
