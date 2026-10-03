document.addEventListener("DOMContentLoaded", () => {
  const playBtn = document.querySelector(".pf-video-play");
  const video = document.querySelector("#pf-featured-video");

  video.addEventListener("play", () => {
    playBtn.classList.add("video-playing");
  });

  playBtn.addEventListener("click", () => {
    if (video.paused) {
      video.play();
      playBtn.classList.add("video-playing");
    } else {
      video.pause();
      playBtn.classList.remove("video-playing");
    }
  });

  video.addEventListener("ended", () => {
    playBtn.classList.remove("video-playing");
    video.pause();
  });
});
