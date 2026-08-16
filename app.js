const btnMobileMenu = document.querySelector('[data-id="menu-btn"]');
const mobileMenu = document.querySelector("#mobile-nav");
const details = document.querySelectorAll("details");

btnMobileMenu.addEventListener("click", () => {
  const isOpen = mobileMenu.getAttribute("data-show") === "true";
  mobileMenu.setAttribute("data-show", String(!isOpen));
  btnMobileMenu.setAttribute("aria-expanded", String(!isOpen));
  btnMobileMenu.firstElementChild.classList.toggle("hidden");
  btnMobileMenu.lastElementChild.classList.toggle("hidden");
});

details.forEach((detail) => {
  detail.addEventListener("click", () => {
    detail.firstElementChild.firstElementChild.nextElementSibling.classList.toggle(
      "hidden",
    );
    detail.firstElementChild.lastElementChild.classList.toggle("hidden");
  });
});
