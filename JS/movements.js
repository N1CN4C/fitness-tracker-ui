// ====== DATA ======
let movements = [];

// ====== DOM ELEMENTS ======
const modalMovementAdd = document.getElementById('modal-movement-add');
const btnMovementAdd = document.getElementById('btn-movement-add');
const btnModalMovementAddClose = modalMovementAdd.querySelector('.close');

// ====== EVENT LISTENERS ======
btnMovementAdd.addEventListener('click', openAddMovementModal );
btnModalMovementAddClose.addEventListener('click', closeAddMovementModal );

// ====== FUNCTIONS ======
function openAddMovementModal() {
  modalMovementAdd.style.display = 'block';
}
function closeAddMovementModal() {
  modalMovementAdd.style.display = 'none';
}