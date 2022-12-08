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
  logo?.classList.toggle('burger-menu__logo--visible')

  if (burger.classList.contains('burger--active')) {
    menuTxt.innerHTML = 'Закрыть'
  } else {
    menuTxt.innerHTML = 'Меню'
  }
})

// burger?.addEventListener('click', () => {
//   body.classList.toggle('stop--scroll')
//   burger?.classList.toggle('burger--active')
//   menu?.classList.toggle('header__menu--hidden')
//   if (burger.classList.contains('burger--active')) {
//     menuTxt.innerHTML = 'Закрыть'
//   } else {
//     menuTxt.innerHTML = 'Меню'
//   }
// })

menuItems.forEach(el => {
  el.addEventListener('click', () => {
    body.classList.remove('stop--scroll')
    burger?.classList.remove('burger-btn--active')
    menu?.classList.remove('header__burger--visible')
  })
})

document.addEventListener('DOMContentLoaded', () => {
  // const services = document.querySelector('.services')
  const header = document.querySelector('.header')
  const scrollItems = document.querySelectorAll('.scroll-item')

  const scrollAnimation = () => {
    let windowCenter = window.innerHeight / 2 + window.scrollY
    // console.log(windowCenter)
    scrollItems.forEach(el => {
      let scrollOffset = el.offsetTop + el.offsetHeight / 2
      console.log(scrollOffset)
      if (windowCenter >= scrollOffset) {
        el.classList.add('animation-class')
      } else {
        el.classList.remove('animation-class')
      }
    })
  }

  const headerFixed = () => {
    let scrollTop = window.scrollY
    let heroCenter = hero.offsetHeight / 2

    if (scrollTop >= heroCenter) {
      header.classList.add('fixed')
      hero.style.marginTop = `${header.offsetHeight}px`
    } else {
      header.classList.remove('fixed')
      hero.style.marginTop = `0px`
    }
  }

  headerFixed()
  scrollAnimation()
  window.addEventListener('scroll', () => {
    headerFixed()
    scrollAnimation()
  })
})
