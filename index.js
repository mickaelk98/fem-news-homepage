const menuIcon = document.querySelector("#menu-icon");
const menuIconClose = document.querySelector("#menu-icon-close");
const mobileMenu = document.querySelector("#mobile-menu");

// open mobile menu
menuIcon.addEventListener("click", () => {
  menuIcon.classList.add("hidden");
  menuIconClose.classList.remove("hidden");
  mobileMenu.classList.remove("hidden");
  mobileMenu.classList.add("flex");
});

// close mobile menu
menuIconClose.addEventListener("click", () => {
  menuIconClose.classList.add("hidden");
  menuIcon.classList.remove("hidden");
  mobileMenu.classList.add("hidden");
});
