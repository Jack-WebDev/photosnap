const toggleNumber = document.querySelectorAll(".annual-price");
const toggler = document.querySelector(".checkbox");
const yearly = document.querySelector(".yearly");
const monthly = document.querySelector(".monthly");

toggler.addEventListener("click", () => {
  toggleNumber.forEach((item) => item.classList.toggle("hidden"));
  yearly.classList.toggle("active");
  monthly.classList.toggle("active");
});
