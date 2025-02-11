// hamburger
const hambuger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");
const totop = document.querySelector("#to-top");

hambuger.addEventListener("click", function () {
  hambuger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// navbar fix
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    totop.classList.remove("hidden");
    totop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    totop.classList.remove("flex");
    totop.classList.add("hidden");
  }
};

// klik di luar hamburger
window.addEventListener("click", function (e) {
  if (e.target != navMenu && e.target != hambuger) {
    hambuger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

// dark mode
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");
darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

// indahkan posisis toggle sesuai mode yang digunakan
// pindahkan posisi toggle sesuai mode
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}
