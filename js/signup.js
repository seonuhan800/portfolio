document.addEventListener('DOMContentLoaded', () => {
  const signupLink = document.querySelector('#top-menu .basic li:nth-child(2) a');
  const modal = document.getElementById('signup-modal');
  const modalBg = modal?.querySelector('.modal-bg');
  const modalClose = modal?.querySelector('.modal-close');
  const toast = document.getElementById('signup-fake-toast');

  if (!signupLink || !modal || !modalBg || !modalClose || !toast) return;

  signupLink.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('hidden');
  });

  const closeModal = () => {
    modal.classList.add('hidden');
  };

  modalBg.addEventListener('click', closeModal);
  modalClose.addEventListener('click', closeModal);

  const form = modal.querySelector('.signup-form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    closeModal();
    toast.classList.remove('hidden');

    setTimeout(() => {
      toast.classList.add('hidden');
    }, 2500);
  });
});
