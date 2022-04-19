
const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container1");

hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
});