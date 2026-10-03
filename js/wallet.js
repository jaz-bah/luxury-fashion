new Swiper(".pf-wallet-slider", {
  slidesPerView: 1,
  spaceBetween: 12,
  pagination: {
    el: ".pf-wallet-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".pf-wallet-next",
    prevEl: ".pf-wallet-prev",
  },
  breakpoints: {
    460: {
      slidesPerView: 2,
      spaceBetween: 12,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
  },
});
