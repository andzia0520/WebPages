const burgerMenu = document.querySelector(".burger-btn")
const navitems = document.querySelector(".nav__items")

const showNavItems = function() {
    navitems.classList.toggle('notvisible')
}
burgerMenu.addEventListener("click", showNavItems)