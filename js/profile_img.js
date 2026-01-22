
const track = document.querySelector('.intro_img');
const prevBtn = document.querySelector('.slide-btn.prev');
const nextBtn = document.querySelector('.slide-btn.next');

const slideWidth = 1098;
const totalSlides = 18;
let currentIndex = 0;

nextBtn.addEventListener('click', () => {
  if (currentIndex < totalSlides - 1) {
    currentIndex++;
    track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
  }
});

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
  }
});
