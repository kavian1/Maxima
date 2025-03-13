const sprites = document.querySelectorAll(".sprite");
const totalFrames = 120;
const frameWidth = 200;

window.addEventListener("scroll", () => {
  sprites.forEach((sprite) => {
    const container = sprite.parentElement;
    const rect = container.getBoundingClientRect();
    const containerHeight = window.innerHeight;

    if (rect.top <= containerHeight && rect.bottom >= 0) {
      const scrollFraction = Math.min(
        1,
        Math.max(
          0,
          (containerHeight - rect.top) / (containerHeight + rect.height / 2)
        )
      );
      let currentFrame = Math.floor(scrollFraction * totalFrames);

      // Evitar que se pase al primer frame al final de la animación
      currentFrame = Math.min(currentFrame, totalFrames - 1);

      sprite.style.backgroundPosition = `-${currentFrame * frameWidth}px 0`;
    }
  });
});
