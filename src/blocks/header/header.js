import "../header/header.scss";

//Burger menu
const iconMenu = document.querySelector(".icon-menu");
const menuBody = document.querySelector(".header-menu__body");
const menuButton = document.querySelector(".header-menu__link_button");

iconMenu.addEventListener("click", function () {
  if (iconMenu.classList.contains("icon-menu_active")) {
    iconMenu.classList.remove("icon-menu_active");
    menuBody.classList.remove("header-menu__body_active");
    setTimeout(() => {menuButton.classList.add("button", "header-menu__link_button");}, 100);
  } 
  else {
    iconMenu.classList.toggle("icon-menu_active");
    menuBody.classList.toggle("header-menu__body_active");
    menuButton.classList.remove("button", "header-menu__link_button");
  }
});