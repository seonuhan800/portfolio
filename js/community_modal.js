// =======================
// 방명록 작성 모달
// =======================

const guestbookModal = document.getElementById("guestbookModal");
const guestbookForm = document.getElementById("guestbookForm");
const openGuestbookBtn = document.getElementById("openGuestbookModal");
const closeGuestbookBtn = guestbookModal.querySelector(".modal-close");

// 열기
openGuestbookBtn.addEventListener("click", () => {
  guestbookModal.classList.remove("hidden");
});

// 닫기
closeGuestbookBtn.addEventListener("click", closeGuestbookModal);

// 배경 클릭 닫기
guestbookModal.addEventListener("click", (e) => {
  if (e.target === guestbookModal) closeGuestbookModal();
});

// ESC 닫기
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !guestbookModal.classList.contains("hidden")) {
    closeGuestbookModal();
  }
});

function closeGuestbookModal() {
  guestbookModal.classList.add("hidden");
  guestbookForm.reset();
}

// textarea 자동 높이
const textarea = guestbookForm.querySelector("textarea");
textarea.addEventListener("input", () => {
  textarea.style.height = "auto";
  textarea.style.height = textarea.scrollHeight + "px";
});

// =======================
// 방명록 저장 (localStorage)
// =======================

guestbookForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const nickname = guestbookForm.nickname.value.trim();
  const message = guestbookForm.message.value.trim();

  if (!nickname || !message) return;

  const guestbook =
    JSON.parse(localStorage.getItem("guestbook")) || [];

  guestbook.unshift({
    nickname,
    message,
    date: new Date().toLocaleString(),
  });

  localStorage.setItem("guestbook", JSON.stringify(guestbook));

  // 방명록 다시 그리기 (이미 함수 만들어둔 경우)
  if (typeof renderGuestbook === "function") {
    renderGuestbook(1);
  }

  closeGuestbookModal();
});
