import * as flsFunctions from './modules/functions.js'

flsFunctions.isWebp()

import Swiper, { Navigation } from 'swiper'

let swiper1 = new Swiper('.reviews__swiper', {
  modules: [Navigation],
  // Optional parameters
  loop: true,
  slidesPerView: 3,

  direction: 'horizontal',

  // speed: 800,

  // spaceBetween: 23,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 44,
    },
    // when window width is >= 480px
    // 480: {
    //   slidesPerView: 2,
    //   spaceBetween: 30
    // },
    // when window width is >= 640px
    524: {
      slidesPerView: 2,
      spaceBetween: 42,
    },
    767: {
      slidesPerView: 3,
      spaceBetween: 47,
    },
  },
})

let swiper2 = new Swiper('.certificates__swiper', {
  modules: [Navigation],
  // Optional parameters
  loop: true,
  slidesPerView: 3,

  direction: 'horizontal',

  // speed: 800,

  // spaceBetween: 23,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 44,
    },
    // when window width is >= 480px
    // 480: {
    //   slidesPerView: 2,
    //   spaceBetween: 30
    // },
    // when window width is >= 640px
    524: {
      slidesPerView: 2,
      spaceBetween: 42,
    },
    767: {
      slidesPerView: 3,
      spaceBetween: 47,
    },
  },
})

const burger = document?.querySelector('[data-burger]')
// const burgerBtn = document?.querySelector('[data-burger__btn]')
const menu = document?.querySelector('[data-menu]')
const logo = document?.querySelector('[data-logo]')
const menuTxt = document?.querySelector('[data-menuTxt]')
const menuItems = menu?.querySelectorAll('a')
const body = document.body

burger?.addEventListener('click', () => {
  body.classList.toggle('stop--scroll')
  // burger?.classList.toggle('burger--active')
  burger?.classList.toggle('burger-btn--active')
  menu?.classList.toggle('header__burger--visible')
})

menuItems.forEach(el => {
  el.addEventListener('click', () => {
    body.classList.remove('stop--scroll')
    burger?.classList.remove('burger-btn--active')
    menu?.classList.remove('header__burger--visible')
  })
})
