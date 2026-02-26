// =====================
// SPACE SYSTEMS LAB — JS
// =====================

// Mobile nav toggle
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('open');
}

// Close nav when a link is clicked (mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.remove('open');
  });
});

// Workshop form handler
function handleFormSubmit(e) {
  e.preventDefault();
  const msg = document.getElementById('form-message');
  msg.textContent = '✓ You\'re registered! We\'ll send details to your email.';
  msg.style.display = 'block';
  e.target.reset();
  // In Phase 3, you'll replace this with a real form service (Formspree or Google Forms)
}

// Fade-in on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.card, .module-card, .module-detail-card, .resource-card, .session-card, .feedback-card, .metric-box, .big-metric').forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});
