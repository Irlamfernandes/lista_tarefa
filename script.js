const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

taskForm.addEventListener('submit', function(event) {
  event.preventDefault();
  addTask(taskInput.value);
  taskInput.value = '';
});

function addTask(taskContent) {
  const taskItem = document.createElement('li');
  taskItem.innerHTML = `
    <span>${taskContent}</span>
    <button class="complete-btn">Concluir</button>
    <button class="delete-btn">Excluir</button>
  `;
  taskList.appendChild(taskItem);
}

taskList.addEventListener('click', function(event) {
  if (event.target.classList.contains('complete-btn')) {
    const task = event.target.parentElement;
    task.classList.toggle('completed');
  } else if (event.target.classList.contains('delete-btn')) {
    const task = event.target.parentElement;
    task.remove();
  }
});
