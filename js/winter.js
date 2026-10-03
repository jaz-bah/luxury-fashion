document.addEventListener("DOMContentLoaded", () => {
  const initializeSwiper = () => {
    new Swiper(".pf-winter-slider", {
      slidesPerView: 1,
      spaceBetween: 12,
      pagination: {
        el: ".pf-winter-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".pf-winter-next",
        prevEl: ".pf-winter-prev",
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
  };

  initializeSwiper();
});
