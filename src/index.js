//Import Styles
import '../src/styles.scss';

//Import Fonts
import "../src/assets/fonts/fonts.scss";

//Import images
import "../src/assets/img/logo.svg";

import "../src/assets/img/main-section-img.jpg";
import "../src/assets/img/feautured-img.jpg";

import "../src/assets/img/biotech.svg";
import "../src/assets/img/express.svg";
import "../src/assets/img/smilehome.svg";
import "../src/assets/img/connect.svg";
import "../src/assets/img/homebuild.svg";

import "../src/assets/img/properties/banyon-tree-realty.jpg";
import "../src/assets/img/properties/capital-hill-residence.jpg";
import "../src/assets/img/properties/picket-fence-realty.jpg";
import "../src/assets/img/properties/corsair-real-estate.jpg";
import "../src/assets/img/properties/sequoia-real-estate.jpg";
import "../src/assets/img/properties/strive-partners-realty.jpg";

import "../src/assets/img/security_ico.svg";
import "../src/assets/img/air_ico.svg";
import "../src/assets/img/garden_ico.svg";
import "../src/assets/img/parking_ico.svg";
import "../src/assets/img/furniture_ico.svg";
import "../src/assets/img/pool_ico.svg";

import "../src/assets/img/reviewers/acathe.jpg";
import "../src/assets/img/reviewers/jlee.jpg";
import "../src/assets/img/reviewers/rev_1_fem.jpg";
import "../src/assets/img/reviewers/rev_1_m.jpg";
import "../src/assets/img/reviewers/rev_2_fem.jpg";
import "../src/assets/img/reviewers/rev_2_m.jpg";
import "../src/assets/img/reviewers/rev_3_fem.jpg";
import "../src/assets/img/reviewers/rev_3_m.jpg";


//Search options
const searchOptions = document.querySelectorAll(".main-section__search-options-btn");

for (const searchOption of searchOptions) {
  searchOption.addEventListener("click", ()=> {
    searchOptions.forEach((searchOption)=> {
      searchOption.classList.remove("main-section__search-options-btn_active")
    })
  searchOption.classList.add("main-section__search-options-btn_active")
  })
}

//Search dropdowns
/*const dropdownBlocks = document.querySelectorAll('.main-section__dropdown-block')
const dropdownMenus = document.querySelectorAll('.main-section__dropdown-menu')

  for (const dropdownBlock of dropdownBlocks) {
    dropdownBlock.addEventListener('click', ()=> {
      if(dropdown.classList.contains('dropdown-closed')) {
        dropdown.classList.remove('dropdown-closed')
        dropdown.classList.add('dropdown-opened')
        console.log('piu!')
      }
      else
        dropdown.classList.remove('dropdown-opened')
        dropdown.classList.add('dropdown-closed')
        console.log('pau!')
    })
    }*/

//Like button
const likes = document.querySelectorAll(".property-card__like");

for (const like of likes) {
  like.addEventListener("click", ()=> {
    if (like.classList.contains("property-card__like_clicked")) {
      like.classList.remove("property-card__like_clicked")
    }
    else {
      like.classList.add("property-card__like_clicked")
    }
  })
}

//Reviews slider
const slides = document.querySelectorAll(".reviews__block");
const dots = document.querySelectorAll(".reviews__slider-dot");

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    showSlides(i);
    showUp(slides[i]);
  })
})

function showSlides(n) {
  slides.forEach((slide) => {
    slide.classList.remove("reviews__block_active")
  })
  dots.forEach((dot) => {
    dot.classList.remove("reviews__slider-dot_active")
  })
  slides[n].classList.add("reviews__block_active")
  dots[n].classList.add("reviews__slider-dot_active")
}

function showUp(target) {
  target.style.opacity = 0;
  var opacity = 0.1;
  var steps = 5;
  var d0 = opacity / steps;
  setInterval(function() {
    if(opacity <= 1) {
      opacity += d0;
      target.style.opacity = opacity;
      steps++;
    }
  })
}

//Burger menu
const iconMenu = document.querySelector(".icon-menu");
const menuBody = document.querySelector(".menu__body");
const menuButton = document.querySelector(".header__button");

iconMenu.addEventListener("click", function () {
  if (iconMenu.classList.contains("icon-menu_active")) {
    iconMenu.classList.remove("icon-menu_active");
	  menuBody.classList.remove("menu__body_active");
    menuButton.classList.add("button", "header__button");
  } 
  else {
    iconMenu.classList.toggle("icon-menu_active");
	  menuBody.classList.toggle("menu__body_active");
    menuButton.classList.remove("button", "header__button");
  }
});