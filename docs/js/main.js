let swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  spaceBetween: 100,

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