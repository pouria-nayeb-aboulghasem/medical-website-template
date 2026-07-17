const menu = document.querySelector("#menu"),
    closeMobileMenu = document.querySelector("#close-mobile-menu"),
    openMobileMenu = document.querySelector("#open-mobile-menu");

closeMobileMenu.addEventListener("click", () => {
    menu.classList.remove("active");
});

openMobileMenu.addEventListener("click", () => {
    menu.classList.add("active");
});