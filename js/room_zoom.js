// ===============================
// 미니룸 이미지 휠 줌인 / 줌아웃
// ===============================

document.addEventListener('DOMContentLoaded', function () {
  const room = document.querySelector('#content-area .room');
  if (!room) return;

  const img = room.querySelector('img');
  if (!img) return;

  let scale = 1;
  const MIN_SCALE = 1;
  const MAX_SCALE = 2.2;
  const STEP = 0.1;

  room.addEventListener('wheel', function (e) {
    e.preventDefault();

    // 휠 방향
    if (e.deltaY < 0) {
      scale += STEP; // 확대
    } else {
      scale -= STEP; // 축소
    }

    // 확대/축소 제한
    scale = Math.min(Math.max(MIN_SCALE, scale), MAX_SCALE);

    // 이미지 중심 기준 확대
    img.style.transform = `translate(-50%, -50%) scale(${scale})`;
  }, { passive: false });
});
