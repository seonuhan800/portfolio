document.addEventListener('DOMContentLoaded', () => {
  const projectWrap = document.querySelector('.project-popup-wrap');
  if (!projectWrap) return;

  const projectBg = projectWrap.querySelector('.popup-bg');
  const galleryItems = document.querySelectorAll('.gallery-item');
  const projectPopups = projectWrap.querySelectorAll('.project-popup');

  function closeProject() {
    projectWrap.classList.add('hidden');
    projectPopups.forEach(p => p.classList.add('hidden'));
  }

  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const targetId = item.dataset.project;
      const targetPopup = document.getElementById(targetId);

      if (!targetPopup) return;

      projectWrap.classList.remove('hidden');
      projectPopups.forEach(p => p.classList.add('hidden'));
      targetPopup.classList.remove('hidden');

      const closeBtn = targetPopup.querySelector('.modal-close');
      if (closeBtn) closeBtn.onclick = closeProject;
    });
  });

  if (projectBg) {
    projectBg.addEventListener('click', closeProject);
  }
});
