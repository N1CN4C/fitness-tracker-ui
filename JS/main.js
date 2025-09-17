// ====== DATA ======
let movements = [];

// ====== DOM ELEMENTS ======

// Header Nav
const dropdown = document.querySelector('.dropdown');
const toggleBtn = dropdown.querySelector('.dropdown_toggle');

// Modals
const modalMovementAdd = document.getElementById('modal-movement-add');
const btnMovementAdd = document.getElementById('btn-movement-add');
const btnModalMovementAddClose = modalMovementAdd.querySelector('.close');

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

// Modals
btnMovementAdd.addEventListener('click', openAddMovementModal );
btnModalMovementAddClose.addEventListener('click', closeAddMovementModal );

// ====== FUNCTIONS ======

// Modals
function openAddMovementModal() {
  modalMovementAdd.style.display = 'block';
}
function closeAddMovementModal() {
  modalMovementAdd.style.display = 'none';
}