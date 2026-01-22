//intro 팝업 모달
const introWrap = document.querySelector('.intro-popup-wrap');
const introBg = introWrap.querySelector('.popup-bg');
const introClose = introWrap.querySelector('.popup-close');
const introBtns = document.querySelectorAll('.intro-open-btn');

function openIntro() {
  introWrap.classList.remove('hidden');
}

function closeIntro() {
  introWrap.classList.add('hidden');
}

introBtns.forEach(btn => {
  btn.addEventListener('click', openIntro);
});

introBg.addEventListener('click', closeIntro);
introClose.addEventListener('click', closeIntro);
