let swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  grabCursor: true,
  spaceBetween: 0,

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 100,
    }
  },

  dynamicMainBullets: 01,

  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// BURGER

const burgerOpen = document.querySelector('.burger-icon');
const burgerClose = document.querySelector('.burger__close');
const burger = document.querySelector('.burger');

burgerOpen.addEventListener('click', () => {
  burger.setAttribute('style', 'top: 0')
  document.body.setAttribute('style', 'overflow:  hidden')
})

burgerClose.addEventListener('click', () => {
  burger.setAttribute('style', 'top: -1000%')
  document.body.setAttribute('style', 'overflow:  auto')
})


//MODAL-THANKS

const modalThanks = document.querySelector('.modal-thanks');
const closeThanks = document.querySelector('.modal-thanks__base-btn');
closeThanks.addEventListener('click', () => {
  modalThanks.setAttribute('style', 'display: none')
})


// SMOOTH SCROLL
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href').substr(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
    burger.setAttribute('style', 'top: -1000%')
    document.body.setAttribute('style', 'overflow:  auto')
  })
}


// HEADER BACKGROUND

const header = document.querySelector('.header')
window.addEventListener('scroll', function (e) {
  if ((window.scrollY) > 50) {
    header.setAttribute('style', 'background-color:  #3b02ba')
  } else {
    header.setAttribute('style', 'background-color: transparent')
  }
});