// PRODUCT COLOR SELECTOR
const colorsContainer = document.querySelector(".pf-color-list");

colorsContainer?.addEventListener("click", (e) => {
  const target = e.target.closest("button");

  if (!target) return;

  const currentSelected = colorsContainer.querySelector(".selected");

  if (currentSelected !== target) {
    currentSelected.classList.remove("selected");
    target.classList.add("selected");
  }
});

const getDirection = () => {
  const prodImageBox = document.querySelector(".pf-pdetails-imgbox");
  const variant = prodImageBox.getAttribute("data-variant");

  if (variant === "slider-thumb-left") {
    return "vertical";
  } else {
    return "horizontal";
  }
};

// PRODUCT SLIDER and THUMBNAIL SLIDER
const bthumbSlider = new Swiper(".pf-prodslider-bthumbs", {
  slidesPerView: "auto",
  spaceBetween: 10,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  watchOverflow: true,
  direction: getDirection(),
  navigation: {
    nextEl: ".pf-prodslider-bt-next",
    prevEl: ".pf-prodslider-bt-prev",
  },
});

const productSlider = new Swiper(".pf-prodslider", {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: ".pf-prodslider-next",
    prevEl: ".pf-prodslider-prev",
  },
  thumbs: {
    swiper: bthumbSlider,
  },
});

productSlider?.on("slideChangeTransitionStart", function () {
  bthumbSlider.slideTo(productSlider.activeIndex);
});

bthumbSlider?.on("slideChangeTransitionStart", function () {
  productSlider.slideTo(bthumbSlider.activeIndex);
});

// Change swiper direction on attribute change
const prodImageBox = document.querySelector(".pf-pdetails-imgbox");

function callback(mutationList, _observer) {
  mutationList.forEach(function (mutation) {
    if (
      mutation.type === "attributes" &&
      mutation.attributeName === "data-variant"
    ) {
      const direction = getDirection();

      bthumbSlider.changeDirection(direction);
    }
  });
}

const observer = new MutationObserver(callback);

observer.observe(prodImageBox, {
  attributes: true,
});

// PRODUCT DETAILS ACCORDION
const accordionList = document.querySelector(".pf-accordion-list");

accordionList.addEventListener("click", (e) => {
  const target = e.target.closest(".pf-accordion-card");
  if (!target) return;

  target.classList.toggle("accordion-active");
});
