// ====== DOM ELEMENTS ======
const dropdown = document.querySelector('.dropdown');
const toggleBtn = dropdown.querySelector('.dropdown_toggle');

// ====== EVENT LISTENERS ======

// Header Nav
toggleBtn.addEventListener('click', function(e) {
  const isOpen = dropdown.classList.toggle('open');
  toggleBtn.setAttribute('aria-expanded', isOpen);
});

// Close Nav menu when clicking outside
document.addEventListener('click', function(e) {
  if (!dropdown.contains(e.target)) {
    dropdown.classList.remove('open');
    toggleBtn.setAttribute('aria-expanded', 'false');
  }
});

// ====== FUNCTIONS ======