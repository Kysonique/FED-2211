const form = document.querySelector('#new-task-form');
const input = document.querySelector('#new-task-input');
const list_el = document.querySelector('#tasks');

// ** Functions

function handleTaskSubmit() {
	let taskVal = input.value;

	return taskVal ? addNewTask() : alert('Invalid Task');
}

function validateForm() {
	let taskVal = input.value;

	return taskVal ? addNewTask() : alert('Invalid Task');
}

function addNewTask() {
	const task_el = document.createElement('div');
	task_el.classList.add('task');
	task_el.innerHTML = `
  <div class="content">
    <input type="text" class="text" value="${input.value}" readonly />
  </div>
  <div class="actions">
    <button class="edit" onclick="editTask(this)">edit</button>
    <button class="delete" onclick="deleteTask(this)">delete</button>
  </div>
  `;

	list_el.appendChild(task_el);
	input.value = '';
}

function editTask(btn) {
	let currentTask =
		btn.parentElement.parentElement.firstElementChild.firstElementChild;
	console.log('Current Task: ', currentTask.value);
	const isEdit = btn.innerHTML.toUpperCase();

	if (isEdit === 'EDIT') {
		btn.innerHTML = 'save';
		currentTask.removeAttribute('readonly');
		currentTask.focus();
	} else {
		btn.innerHTML = 'edit';
		currentTask.setAttribute('readonly', 'readonly');
	}
}

function deleteTask(btn) {
	btn.parentElement.parentElement.remove();
}
