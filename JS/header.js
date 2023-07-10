const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
const menuIcon = document.getElementById("menuIcon");
const closeIcon = document.getElementById("closeIcon");

hamburger.addEventListener("click", hammburgerBtn);

function hammburgerBtn() {
  navMenu.classList.toggle("active");
  menuIcon.classList.toggle("active");
  closeIcon.classList.toggle("active");
}
