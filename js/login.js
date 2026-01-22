document.addEventListener('DOMContentLoaded', () => {
  const loginLink = document.querySelector('#top-menu .basic li a');
  const modal = document.getElementById('login-modal');
  const modalBg = document.querySelector('.modal-bg');
  const modalClose = document.querySelector('.modal-close');
  const toast = document.getElementById('login-fake-toast');

  // 필수 요소 없으면 종료 (다른 페이지 안전 처리)
  if (!loginLink || !modal || !modalBg || !modalClose || !toast) return;

  // 로그인 클릭 → 모달 열기
  loginLink.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('hidden');
  });

  // 모달 닫기 함수
  const closeModal = () => {
    modal.classList.add('hidden');
  };

  modalBg.addEventListener('click', closeModal);
  modalClose.addEventListener('click', closeModal);

  // 로그인 폼 제출 → 모달 닫고 토스트 표시
  const loginForm = modal.querySelector('.login-form');

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    closeModal();

    toast.classList.remove('hidden');

    setTimeout(() => {
      toast.classList.add('hidden');
    }, 2500);
  });
});
