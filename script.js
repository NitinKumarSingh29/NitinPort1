// 3D hover effect
const card = document.getElementById('card');
document.addEventListener('mousemove', (e) => {
  const x = (window.innerWidth / 2 - e.pageX) / 25;
  const y = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});

// Modal logic
const exploreBtn = document.getElementById('exploreBtn');
const modal = document.getElementById('projectModal');
const closeBtn = document.getElementById('closeBtn');

// Open modal on click
exploreBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
});

// Close modal on click
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Optional: close modal when clicking outside content
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
