// Basic enhancements (no forms or online booking)
document.addEventListener('DOMContentLoaded', () => {
  // Mark current nav link active based on URL
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });
});
