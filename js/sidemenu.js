document.addEventListener('DOMContentLoaded', () => {
  const menuLinks = document.querySelectorAll('#side-menu ul li a');
  const currentPath = window.location.pathname.split('/').pop();

  menuLinks.forEach(link => {
    const li = link.parentElement;
    const linkPath = link.getAttribute('href');

    // 초기화
    li.classList.remove('active');

    // ===== 게시판 그룹 처리 =====
    if (
      currentPath.startsWith('me_project_') &&
      linkPath === 'me_project_Design.html'
    ) {
      li.classList.add('active');
      return;
    }

    // ===== 일반 페이지 처리 =====
    if (linkPath === currentPath) {
      li.classList.add('active');
    }
  });
});
