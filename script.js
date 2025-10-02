// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

// Placeholder for form (no backend yet)
document.querySelector('form').addEventListener('submit', e => {
  e.preventDefault();
  alert("Thanks for reaching out! I'll get back to you soon.");
});
