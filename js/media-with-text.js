document.addEventListener("DOMContentLoaded", () => {
  const mediaWTSections = document.querySelectorAll(".pf-mediatext:has(video)");

  const toggleVideoPlayback = (container, video) => {
    container.classList.toggle("pf-playing");
    container.classList.contains("pf-playing") ? video.play() : video.pause();
  };

  mediaWTSections.forEach((section) => {
    const videoBtn = section.querySelector(".pf-video-btn");
    const videoContainer = section.querySelector(".pf-media-video");
    const video = section.querySelector("video");

    if (video && videoContainer) {
      if (videoBtn) {
        videoBtn.addEventListener("click", () =>
          toggleVideoPlayback(videoContainer, video)
        );
      }
      video.addEventListener("play", () => {
        videoContainer.classList.add("pf-playing");
      });

      video.addEventListener("pause", () => {
        videoContainer.classList.remove("pf-playing");
      });

      video.addEventListener("ended", () => {
        videoContainer.classList.remove("pf-playing");
        video.currentTime = 0;
      });
    }
  });
});
