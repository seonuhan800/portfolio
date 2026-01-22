document.addEventListener('DOMContentLoaded', () => {
  const todayInput = document.querySelector('.num li:first-child input');
  const totalInput = document.querySelector('.num li:last-child input');

  if (!todayInput || !totalInput) return;

  const today = new Date().toDateString();

  const lastVisit = localStorage.getItem('lastVisit');
  let total = Number(localStorage.getItem('total')) || 0;
  let todayCount = Number(localStorage.getItem('todayCount')) || 0;

  if (lastVisit !== today) {
    todayCount = 1;
    localStorage.setItem('lastVisit', today);
  } else {
    todayCount++;
  }

  total++;

  localStorage.setItem('todayCount', todayCount);
  localStorage.setItem('total', total);

  todayInput.value = todayCount;
  totalInput.value = total;
});
