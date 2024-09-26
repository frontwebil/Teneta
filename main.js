const openBurger = document.getElementById("burger-open");
const closeBurger = document.getElementById("burger-close");
const menu = document.getElementById("menu");

openBurger.addEventListener("click", () => {
  document.body.style.overflow = 'hidden';

  menu.classList.add("active");
});

closeBurger.addEventListener("click", () => {
  document.body.style.overflow = "auto";

  menu.classList.remove("active");
});

const menuLinks = document.querySelectorAll(".menu-link");

menuLinks.forEach((link) =>
  link.addEventListener("click", () => {
    document.body.style.overflow = "auto";

    menu.classList.remove("active");
  })
);