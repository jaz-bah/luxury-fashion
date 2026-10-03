new Swiper(".pf-menscollection-slider", {
  slidesPerView: 1,
  spaceBetween: 12,
  navigation: {
    nextEl: ".pf-menscollection-next",
    prevEl: ".pf-menscollection-prev",
  },
  breakpoints: {
    448: {
      slidesPerView: 1.5,
    },
    576: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1800: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
});
