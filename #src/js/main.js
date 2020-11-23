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