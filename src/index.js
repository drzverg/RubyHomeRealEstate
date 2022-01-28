//Import Styles
import '../src/styles.scss';

//Import Fonts
import "../src/assets/fonts/fonts.scss";

//Import images
import "../src/assets/img/logo.svg";
import '../src/assets/img/favicon.ico';

import "../src/assets/img/main-section-img-cover.jpg";
import "../src/assets/img/main-section-img.jpg";
import "../src/assets/img/feautured-img.jpg";
import "../src/assets/img/line.svg";

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

//Slider

import noUiSlider from 'nouislider';
import '../node_modules/nouislider/dist/nouislider.min.css'

var nonLinearStepSlider = document.getElementById('slider-non-linear-step');

noUiSlider.create(nonLinearStepSlider, {
    start: [500, 4000],
    range: {
        'min': [0],
        '10%': [500, 500],
        '50%': [4000, 1000],
        'max': [9000]
    }
});

var nonLinearStepSliderValueElement = document.getElementById('slider-non-linear-step-value');

nonLinearStepSlider.noUiSlider.on('update', function (values) {
  let cleanValues = [];
  for (const value of values) {
    cleanValues.push('$' + Math.round(value));
  }
  nonLinearStepSliderValueElement.innerHTML = cleanValues.join(' - ');
});

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
const dropdowns = document.querySelectorAll('.dropdown');
const dropdownMenus = document.querySelectorAll('.dropdown__list');
const dropdownItems = document.querySelectorAll('.dropdown__item');
const dropdownTexts = document.querySelectorAll('.dropdown__text');

dropdowns.forEach((dropdown, i) => {
  dropdown.addEventListener('click', () => {
    showDropdownMenu(i);
  })
})

function showDropdownMenu(n) {
  if(dropdownMenus[n].classList.contains('dropdown__list_active')) {
    hideDropdowns();
  }
  else {
    hideDropdowns();
    dropdownMenus[n].classList.add('dropdown__list_active');
    dropdownTexts[n].classList.add('dropdown__text_target');
  }
}

function hideDropdowns() {
  dropdownMenus.forEach((dropdownMenu) => {
    dropdownMenu.classList.remove('dropdown__list_active');
  })
  dropdownTexts.forEach((dropdownText) => {
    dropdownText.classList.remove('dropdown__text_target');
  })
}

window.addEventListener('click', e => {
  const target = e.target
  if (!target.closest('.dropdown__list') && !target.closest('.dropdown')) {
    hideDropdowns();
  }
})

dropdownItems.forEach((item) => {
  item.addEventListener('click', () => {
    if (item.textContent.length > 10) {
      document.querySelector('.dropdown__text_target').textContent = item.textContent.substring(0, 10) + '...';
    } else {
      document.querySelector('.dropdown__text_target').textContent = item.textContent;
    }
  })
})

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
const menuButton = document.querySelector(".menu__link_button");

iconMenu.addEventListener("click", function () {
  if (iconMenu.classList.contains("icon-menu_active")) {
    iconMenu.classList.remove("icon-menu_active");
	  menuBody.classList.remove("menu__body_active");
    setTimeout(() => {menuButton.classList.add("button", "menu__link_button");}, 100);
  } 
  else {
    iconMenu.classList.toggle("icon-menu_active");
	  menuBody.classList.toggle("menu__body_active");
    menuButton.classList.remove("button", "menu__link_button");
  }
});