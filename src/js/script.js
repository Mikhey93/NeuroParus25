import mobMenu from "./modules/mobile-menu.js";
import modals from "./modules/modals.js";
import accordion from "./modules/accordion.js";
import slider from "./modules/slider.js"
import tabs from "./modules/tabs.js";
import fixedMenu from "./modules/scroll-menu.js";
import scrollToTop from "./modules/scroll.js";
import specialistsInfoModals from "./modules/specialists-info.js";

window.addEventListener('DOMContentLoaded', () => {
  'use strict';
  // Mobile menu at all pages
  mobMenu('.humb', '.header__bottom-wrapper', 'humb_active', 'header__bottom-wrapper_active');
  // Modals at all pages
  modals();
  // Slider at therapy.html page
  slider('.reviews-therapy__slider', '.reviews-therapy__slider-img', '.arrow-left', '.arrow-right');
  // Accordion 
  accordion('.accordion-card', '.accordion-top', '.accordion-bottom', '.accordion-icon__img', 'accordion-icon__img_active', 'accordion-bottom_active');
  // Tabs at parents.html page
  tabs('.tabs__titles-wrapper', '.tab__title', '.specialists-parents__cards-wrapper', 'tab__title_active', 'flex');
  // Fixed menu at all pages
  fixedMenu('.header__bottom-wrapper', 'header__bottom-wrapper_fixed');
  // Pageup scroll at all pages
  scrollToTop();
  // Specialists info modals at parents.html page
  specialistsInfoModals();
});