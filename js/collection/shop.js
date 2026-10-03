// Shop Layout Column Toggle
const layoutBtns = document.querySelector(".pf-shop-layout");
const productsContainer = document.querySelector(".pf-shop-products");

layoutBtns.addEventListener("click", (e) => {
  const target = e.target.closest(".pf-layout-btn");
  if (!target) return;

  layoutBtns
    .querySelectorAll(".pf-layout-btn")
    .forEach((btn) => btn.classList.remove("pf-active"));
  target.classList.add("pf-active");

  const column = target.dataset.column;

  productsContainer.setAttribute("data-column", column);
});

// Product Category Change
const categoryBtns = document.querySelector(".pf-filter-categories");
const categoryTitle = document.querySelector(".pf-fhead-category");

categoryBtns.addEventListener("click", (e) => {
  e.preventDefault();

  const target = e.target.closest("a");
  if (!target) return;

  categoryTitle.textContent = target.textContent;

  categoryBtns
    .querySelectorAll("a")
    .forEach((btn) => btn.classList.remove("pf-active"));
  target.classList.add("pf-active");
});
