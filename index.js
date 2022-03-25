const navMenu = document.getElementById("nav__menu");
const navToggle = document.getElementById("nav__toggle");
const navClose = document.getElementById("nav__close")

// this is to show menu, using the menu-icon
if(navToggle){
    navToggle.addEventListener("click", function(){
        navMenu.classList.add("show__menu")
    })
}

if(navToggle){
    navClose.addEventListener("click", function(){
        navMenu.classList.remove("show__menu")
    })
}