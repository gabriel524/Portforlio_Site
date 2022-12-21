const hamburger = document.querySelector(".navbar .nav-list .hamburger");
const mobile_menu = document.querySelector(".navbar ul");
const menu_item = document.querySelectorAll(".navbar a");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobile_menu.classList.toggle("active");
});

menu_item.forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobile_menu.classList.toggle("active");
  });
});
