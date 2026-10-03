document.addEventListener("DOMContentLoaded", () => {
  const videoSection = document.querySelector(".pf-video-section");
  if (!videoSection) return;

  const videoContent = videoSection.querySelector(".pf-video-content");
  const video = videoSection.querySelector("video");
  const videoToggleBtn = videoSection.querySelector(".pf-video-toggle");

  if (!video || !videoContent || !videoToggleBtn) return;

  const updateVideoState = () => {
    videoContent.classList.toggle(
      "pf-video-playing",
      !video.paused && !video.ended
    );
  };

  videoToggleBtn.addEventListener("click", () => {
    video.paused ? video.play() : video.pause();
  });

  video.addEventListener("play", updateVideoState);
  video.addEventListener("pause", updateVideoState);
  video.addEventListener("ended", () => {
    updateVideoState();
    video.currentTime = 0;
  });
});

document.addEventListener("DOMContentLoaded", () => {
  gsap?.registerPlugin(ScrollTrigger, ScrollToPlugin);

  const section = document.querySelector(".pf-video-section");
  if (!section) return;

  const title = section.querySelector(".pf-section-title");
  const description = section.querySelector(".pf-section-desc");
  const video = section.querySelector(".pf-video-box");
  const ctaBtn = section.querySelector(".pf-video-btn");

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top 70%",
      toggleActions: "play none none reverse",
      scrub: false,
    },
  });

  tl.from(title, { y: 30, opacity: 0, duration: 0.6 })
    .from(description, { y: 30, opacity: 0, duration: 0.6 }, "<0.1")
    .from(video, { scale: 0.85, opacity: 0, duration: 0.6 }, "<0.2")
    .from(ctaBtn, { y: 30, opacity: 0, duration: 0.6 }, "<0.1");
});
