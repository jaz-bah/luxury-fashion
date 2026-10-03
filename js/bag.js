document.addEventListener("DOMContentLoaded", () => {
  const animationsEnabled = true;

  const swiper = new Swiper(".pf-bag-slider", {
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: ".pf-bag-slider-next",
      prevEl: ".pf-bag-slider-prev",
    },
  });

  gsap?.registerPlugin(ScrollTrigger, ScrollToPlugin);

  const section = document.querySelector(".pf-bag");
  if (!section) return;

  const slideCards = section.querySelectorAll(".swiper-slide");

  if (animationsEnabled) {
    gsap.fromTo(
      section,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
          markers: false,
        },
      }
    );
  }

  const animateSlide = (slide) => {
    if (!animationsEnabled || !slide) return;

    const title = slide.querySelector(".pf-bag-title");
    const description = slide.querySelector(".pf-bag-desc");
    const ctaBtn = slide.querySelector(".pf-bag-callback");

    gsap.killTweensOf([title, description, ctaBtn]);

    const tl = gsap.timeline();
    tl.fromTo(title, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 })
      .fromTo(
        description,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "<0.1"
      )
      .fromTo(
        ctaBtn,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "<0.1"
      );
  };

  animateSlide(slideCards[swiper.activeIndex]);

  swiper.on("slideChange", () => {
    const activeSlide = slideCards[swiper.activeIndex];
    animateSlide(activeSlide);
  });
});
