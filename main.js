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


const inputs = document.getElementsByClassName('telephone');

Array.from(inputs).forEach((el) => {

  el.addEventListener('keydown', (event) => {

    const cursorPosition = el.selectionStart;

    if (cursorPosition < 4 && (event.key === 'Backspace' || event.key === 'Delete')) {
        event.preventDefault();
    }
  });

  el.addEventListener('input', () => {
    if (!el.value.startsWith('+380')) {
      el.value = '+380';
    }
  });

});
