const openBurger = document.getElementById("burger-open");
const closeBurger = document.getElementById("burger-close");
const menu = document.getElementById("menu");
const nav = document.querySelectorAll(".header-nav-text");

nav.forEach((el) => {
  el.addEventListener("click", () => {
    document.body.style.overflow = "auto";

    menu.classList.remove("active");
  });
});

openBurger.addEventListener("click", () => {
  document.body.style.overflow = "hidden";

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

const inputs = document.getElementsByClassName("telephone");

Array.from(inputs).forEach((el) => {
  el.addEventListener("keydown", (event) => {
    const cursorPosition = el.selectionStart;

    if (
      cursorPosition < 4 &&
      (event.key === "Backspace" || event.key === "Delete")
    ) {
      event.preventDefault();
    }
  });

  el.addEventListener("input", () => {
    if (!el.value.startsWith("+380")) {
      el.value = "+380";
    }
  });
});

const popUp = document.getElementById("popup");
const buttonsOpen = document.querySelectorAll(".pop-up-open");

buttonsOpen.forEach((el) => {
  el.addEventListener("click", () => {
    popUp.classList.toggle("active");
  });
});

const readMore = document.getElementById("read-more");
const text = document.querySelectorAll(".detector-content-left-text.mobile");

readMore.addEventListener("click", () => {
  text.forEach((el) => {
    el.style.display = "block";
    el.style.opacity = 1;
  });
  readMore.style.display = "none";
});