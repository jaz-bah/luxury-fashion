new Swiper(".pf-hslider-swiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,
  speed: 700,
  navigation: {
    nextEl: ".pf-hslider-next",
    prevEl: ".pf-hslider-prev",
  },
  pagination: {
    el: ".pf-hslider-pagination",
    type: "fraction",
  },
});
