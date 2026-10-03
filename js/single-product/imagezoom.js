const zoomImageAreas = document.querySelectorAll(".pfZoomArea");

zoomImageAreas.forEach((area) => {
  area.addEventListener("mousemove", (event) => {
    let pointer = {
      x: (event.offsetX * 100) / area.offsetWidth,
      y: (event.offsetY * 100) / area.offsetHeight,
    };

    area.style.setProperty("--zoom-x", pointer.x + "%");
    area.style.setProperty("--zoom-y", pointer.y + "%");
  });
});
