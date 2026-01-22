const ITEMS_PER_PAGE = 5;
let currentPage = 1;

const listEl = document.querySelector('.guestbook-list');
const paginationEl = document.querySelector('.pagination');

function getGuestbookData() {
  return JSON.parse(localStorage.getItem('guestbook')) || [];
}

function renderGuestbook(page = 1) {
  const data = getGuestbookData();
  listEl.innerHTML = '';

  const start = (page - 1) * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;
  const pageItems = data.slice(start, end);

  pageItems.forEach(item => {
    const li = document.createElement('li');
    li.className = 'guestbook-item';

    li.innerHTML = `
      <div class="guestbook-avatar"></div>
      <div class="guestbook-content">
        <div class="guestbook-nickname">${item.nickname}</div>
        <div class="guestbook-text">
          ${item.secret ? '🔒 비밀글입니다' : item.text}
        </div>
      </div>
    `;

    listEl.appendChild(li);
  });

  renderPagination(data.length);
}

function renderPagination(totalItems) {
  paginationEl.innerHTML = '';
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement('button');
    btn.textContent = i;
    btn.onclick = () => {
      currentPage = i;
      renderGuestbook(i);
    };
    paginationEl.appendChild(btn);
  }
}

renderGuestbook();
