document.addEventListener("DOMContentLoaded", () => {
  const faq = document.querySelector(".pf-faq-accordion");

  if (faq) {
    faq.addEventListener("click", (e) => {
      const target = e.target.closest(".pf-accordion-header");
      if (!target) return;

      const item = target.closest(".pf-accordion-item");
      const isActive = item.classList.contains("pf-active");

      if (!isActive) {
        const activeItem = faq.querySelector(".pf-accordion-item.pf-active");
        if (activeItem) activeItem.classList.remove("pf-active");
        item.classList.add("pf-active");
      }
    });
  }
});
