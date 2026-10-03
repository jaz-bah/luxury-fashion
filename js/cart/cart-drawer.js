const cartOpenBtn = document.querySelector(".cart-open-btn");
const cartDrawer = document.querySelector(".pf-cart-drawer");

cartOpenBtn.addEventListener("click", () => {
  cartDrawer.classList.add("pf-active");
});

cartDrawer.addEventListener("click", (e) => {
  if (
    e.target.closest(".pf-cart-close") ||
    !e.target.closest(".pf-cart-content")
  ) {
    cartDrawer.classList.remove("pf-active");
  }
});
