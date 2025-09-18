// ====== DOM ELEMENTS ======
const navbarDropdown = document.querySelector('.dropdown');
const navbarDropdownToggleBtn = navbarDropdown.querySelector('.dropdown_toggle');

// ====== EVENT LISTENERS ======

navbarDropdownToggleBtn.addEventListener('click', openNavbarDropdown );

// Close Nav menu when clicking outside
document.addEventListener('click', function(e) {
  if (!navbarDropdown.contains(e.target)) {
    closeNavbarDropdown();
  }
});

// ====== FUNCTIONS ======
function openNavbarDropdown() {
  const isOpen = navbarDropdown.classList.toggle('open');
  navbarDropdownToggleBtn.setAttribute('aria-expanded', isOpen);
}
function closeNavbarDropdown() {
    navbarDropdown.classList.remove('open');
    navbarDropdownToggleBtn.setAttribute('aria-expanded', 'false');
}