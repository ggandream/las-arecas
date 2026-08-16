const btnMobileMenu = document.querySelector('[data-id="menu-btn"]');
const mobileMenu = document.querySelector("#mobile-nav");

btnMobileMenu.addEventListener("click", () => {
  const isOpen = mobileMenu.getAttribute("data-show") === "true";
  mobileMenu.setAttribute("data-show", String(!isOpen));
  btnMobileMenu.setAttribute("aria-expanded", String(!isOpen));
  btnMobileMenu.firstElementChild.classList.toggle("hidden");
  btnMobileMenu.lastElementChild.classList.toggle("hidden");
});
