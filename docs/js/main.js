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
})

burgerClose.addEventListener('click', () => {
  burger.setAttribute('style', 'top: -100%')
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
  })
}