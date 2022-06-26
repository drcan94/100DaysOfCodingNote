const mainElement = document.getElementsByTagName("main");
const fullMenu = document.getElementById("full-menu");

// Aşağıdaki yöntem best practice değildir :)
// hocanın yaptığı gibi pseudoselector kullanarak yapılabiliyor

const showMenu = () => {
  let initialValue = mainElement[0].getAttribute("initial");
  if (initialValue === "open") {
    mainElement[0].setAttribute("initial", "close");
    mainElement[0].classList.replace("opened", "closed");
    fullMenu.classList.replace("closed", "opened");
  } else if (initialValue === "close") {
    mainElement[0].setAttribute("initial", "open");
    mainElement[0].classList.replace("closed", "opened");
    fullMenu.classList.replace("opened", "closed");
  }
};


window.addEventListener("resize", () => {
    mainElement[0].setAttribute("initial", "open");
    mainElement[0].classList.replace("closed", "opened");
    fullMenu.classList.replace("opened", "closed");
  });