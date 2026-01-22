document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".BGM-track");
  const content = document.querySelector(".BGM");

  const clone = content.cloneNode(true);
  track.appendChild(clone);

  let pos = 0;
  let speed = 0.5; // 숫자 낮을수록 느림

  function move() {
    pos -= speed;

    if (Math.abs(pos) >= content.offsetWidth) {
      pos = 0;
    }

    track.style.transform = `translateX(${pos}px)`;
    requestAnimationFrame(move);
  }

  move();
});
