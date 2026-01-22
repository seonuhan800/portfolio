// FAQ 모달 열기
const faqOpenBtn = document.querySelector('#top-menu .basic li:last-child a');
const faqModal = document.getElementById('faq-modal');

faqOpenBtn.addEventListener('click', (e) => {
  e.preventDefault();
  faqModal.classList.remove('hidden');
});

// 닫기 버튼 & 배경
faqModal.querySelector('.modal-close').addEventListener('click', () => {
  faqModal.classList.add('hidden');
});

faqModal.querySelector('.modal-bg').addEventListener('click', () => {
  faqModal.classList.add('hidden');
});

// FAQ 아코디언
const faqTitles = faqModal.querySelectorAll('.faq-title');

faqTitles.forEach(title => {
  title.addEventListener('click', () => {
    const item = title.parentElement;
    item.classList.toggle('active');
  });
});
