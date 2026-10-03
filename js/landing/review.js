new Swiper(".pf-review-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".pf-review-next",
    prevEl: ".pf-review-prev",
  },
  pagination: {
    el: ".pf-review-pagination",
    clickable: true,
  },
});
