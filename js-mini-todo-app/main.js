const tasks = [
  {
    title: "quét nhà",
    completed: true,
  },
];

const taskList = document.getElementById('task-list');


function renderTasks() {
  const html = tasks.map(task => {
    return `
      <li class="task-item ${task.completed ? 'completed' : ''}">
          <span class="task-title">${task.title}</span>
          <div class="task-action">
              <button class="task-btn edit">Edit</button>
              <button class="task-btn done">${task.completed ? 'Mark as undone' : 'Mark as done'}</button>
              <button class="task-btn delete">Delete</button>
          </div>
      </li>
    `
  }).join('');

  taskList.innerHTML = html;
}

renderTasks();



const formTask = document.querySelector('.todo-form');
const inputTask = document.querySelector('#todo-input');

if(formTask) {
  formTask.addEventListener('submit', function(event) {
    event.preventDefault();
    const taskTitle = inputTask.value;
    if(!taskTitle) return alert('Vui lòng nhập tên công việc');

    tasks.push({
      title: taskTitle,
      completed: false,
    });

    renderTasks();
    inputTask.value = '';

  })};








