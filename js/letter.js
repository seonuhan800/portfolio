// ===== 쪽지 보내기 모달 =====

// 요소 선택
const messageModal = document.getElementById("messageModal");
const messageForm = document.getElementById("messageForm");
const messageCloseBtn = messageModal.querySelector(".modal-close");

// (예시) 쪽지 보내기 버튼
// <button id="openMessageModal">쪽지 보내기</button>
const openMessageBtn = document.getElementById("openMessageModal");

// =======================
// 모달 열기 / 닫기
// =======================

// 열기
if (openMessageBtn) {
  openMessageBtn.addEventListener("click", () => {
    messageModal.classList.remove("hidden");
  });
}

// 닫기 버튼
messageCloseBtn.addEventListener("click", closeMessageModal);

// 모달 바깥 클릭 시 닫기
messageModal.addEventListener("click", (e) => {
  if (e.target === messageModal) {
    closeMessageModal();
  }
});

// ESC 키로 닫기
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !messageModal.classList.contains("hidden")) {
    closeMessageModal();
  }
});

function closeMessageModal() {
  messageModal.classList.add("hidden");
  messageForm.reset(); // 작성 내용 초기화
}

// =======================
// textarea 자동 높이 조절
// =======================

const messageTextarea = messageForm.querySelector("textarea");

messageTextarea.addEventListener("input", () => {
  messageTextarea.style.height = "auto";
  messageTextarea.style.height = messageTextarea.scrollHeight + "px";
});

// =======================
// 쪽지 저장 (localStorage)
// =======================

messageForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const sender = messageForm.sender.value.trim();
  const message = messageForm.message.value.trim();
  const fileInput = messageForm.attachment;

  if (!sender || !message) return;

  const storedMessages =
    JSON.parse(localStorage.getItem("messages")) || [];

  const newMessage = {
    sender,
    message,
    date: new Date().toLocaleString(),
    fileName: fileInput.files[0]
      ? fileInput.files[0].name
      : null,
  };

  storedMessages.push(newMessage);
  localStorage.setItem("messages", JSON.stringify(storedMessages));

  // 성공 알림 (토스트 있다면 여기서 연동 가능)
  alert("쪽지가 성공적으로 전달되었습니다.");

  closeMessageModal();
});
