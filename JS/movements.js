// ====== DATA ======
let movements = [];

// ====== DOM ELEMENTS ======
const modalMovementAdd = document.getElementById('modal-movement-add');
const btnMovementAdd = document.getElementById('btn-movement-add');
const btnModalMovementAddClose = modalMovementAdd.querySelector('.close');
const formMovementAdd = document.getElementById('form-movement-add');

// ====== EVENT LISTENERS ======
btnMovementAdd.addEventListener('click', openAddMovementModal );

btnModalMovementAddClose.addEventListener('click', closeAddMovementModal );

formMovementAdd.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(formMovementAdd);
  const newMovement = {
    id: Date.now(),
    name: formData.get('name'),
    description: formData.get('description'),
    musclegroups: formData.get('musclegroups'),
    equipment: formData.get('equipment')
  };
  movements.push(newMovement);
  renderTable();
  formMovementAdd.reset();
  closeAddMovementModal();
})

// ====== FUNCTIONS ======
function openAddMovementModal() {
  modalMovementAdd.style.display = 'block';
}

function closeAddMovementModal() {
  modalMovementAdd.style.display = 'none';
}

function renderTable() {
  console.log(movements);
  const tbody = document.getElementById('tbl-body-movements');
  tbody.innerHTML = '';
  movements.forEach(mvmt => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${mvmt.name}</td>
      <td>${mvmt.description}</td>
      <td>${mvmt.musclegroups}</td>
      <td>${mvmt.equipment}</td>
    `;
    tbody.append(row);
  })
}