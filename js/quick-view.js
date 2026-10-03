document.addEventListener("DOMContentLoaded", () => {
  // Quick View Modal Toggle
  const quickViewBtn = document.querySelector("#quick-view-open-btn");
  const quickViewModal = document.querySelector("#pf-quickview-modal");

  quickViewBtn.addEventListener("click", () => {
    quickViewModal.classList.add("pf-active");
  });

  quickViewModal.addEventListener("click", (e) => {
    const notCard = !e.target.closest(".pf-quickview-wrapper");
    const closeBtn = e.target.closest(".pf-quickview-close");

    if (notCard || closeBtn) {
      quickViewModal.classList.remove("pf-active");
    }
  });

  // Quick View Modal Image Slider
  new Swiper(".pf-quickview .pf-quickview-slider", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    navigation: {
      nextEl: ".pf-quickview .pf-quickview-next",
      prevEl: ".pf-quickview .pf-quickview-prev",
    },
  });
});
