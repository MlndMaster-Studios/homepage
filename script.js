// Simple mouse-parallax hover for each card
document.querySelectorAll('.schedule-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouseX', x);
    card.style.setProperty('--mouseY', y);
  });
  card.addEventListener('mouseleave', () => {
    card.style.setProperty('--mouseX', 0);
    card.style.setProperty('--mouseY', 0);
  });
});
