const faqList = document.querySelector(".pf-faq-list");

faqList.addEventListener("click", (e) => {
  const target = e.target.closest(".pf-faq-card");
  if (!target) return;

  const activeItem = faqList.querySelector(".pf-faq-card.faq-active");

  if (target !== activeItem) {
    activeItem?.classList.remove("faq-active");
    target.classList.add("faq-active");
  }
});
