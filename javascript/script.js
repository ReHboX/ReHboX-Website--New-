const contactModal = document.querySelector(".contact-us");
const modal = document.querySelector(".contact-modal");
const exitContact = document.querySelector(".ph-arrow-left-light");
const menu = document.querySelector(".menu");
const toggleMenu = document.querySelector(".mobile");
const exitMenu = document.querySelector(".ph-x");
const blurScreen = document.querySelector(".blur-screen");

const menuHandler = () => {
  menu.classList.add("show");
};

const exitHandler = () => {
  menu.classList.remove("show");
};

const exitContactHandler = () => {
  modal.classList.remove("display-modal");
  blurScreen.style.display = "none";
};

toggleMenu.addEventListener("click", menuHandler);
exitMenu.addEventListener("click", exitHandler);

contactModal.addEventListener("click", () => {
  modal.classList.add("display-modal");
  blurScreen.style.display = "block";
});

exitContact.addEventListener("click", exitContactHandler);
