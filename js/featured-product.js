document.addEventListener("DOMContentLoaded", () => {
  new Swiper(".pf-featured-product .pf-product-slider", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    navigation: {
      prevEl: ".pf-featured-product .pf-featured-product-prev",
      nextEl: ".pf-featured-product .pf-featured-product-next",
    },
    breakpoints: {
      440: {
        slidesPerView: 2,
        spaceBetween: 8,
      },
      992: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      1200: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      1400: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
    },
  });
});
