const popup = document.querySelector('.profile-popup');
const popupBg = document.querySelector('.popup-bg');
const popupClose = document.querySelector('.popup-close');

const introBtn = document.querySelector('.intro-open-btn');
const introPopup = document.querySelector('.intro-popup');

const galleryItems = document.querySelectorAll('.gallery-item');
const projectPopups = document.querySelectorAll('.project-popup');

function openPopup(target) {
  popup.classList.remove('hidden');
  target.classList.remove('hidden');
}

function closePopup() {
  popup.classList.add('hidden');
  introPopup.classList.add('hidden');
  projectPopups.forEach(p => p.classList.add('hidden'));
}

/* intro 열기 */
introBtn.addEventListener('click', () => {
  openPopup(introPopup);
});

/* 프로젝트 열기 */
galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    const targetId = item.dataset.project;
    const targetPopup = document.getElementById(targetId);
    openPopup(targetPopup);
  });
});

/* 닫기 */
popupBg.addEventListener('click', closePopup);
popupClose.addEventListener('click', closePopup);
