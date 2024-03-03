const navbarMenu = document.querySelector(".navbar-menu");
const navbarBtn = document.querySelector("#navbarBtn");

navbarBtn.addEventListener("click", () => {
    navbarMenu.classList.toggle("navbar-menu-show");
})
