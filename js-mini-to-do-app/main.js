const tasks = [];

const taskList = document.getElementById('task-list');
const formTask = document.querySelector('.todo-form');
const inputTask = document.querySelector('#todo-input');

function handleTaskAction(event) {
  const taskItem = event.target.closest('.task-item');
  const taskIndex = taskItem.getAttribute('task-index');
  const task = tasks[taskIndex];

  if(event.target.closest(".task-btn.edit")) {
    const newTitle = prompt("Nhập tên công việc mới", task.title);
    if(!newTitle) return alert('Tên công việc không được để trống');
    task.title = newTitle;
    renderTasks();
   
  }else if(event.target.closest(".task-btn.done")) {
    task.completed = !task.completed;
    if(task.completed) {
      alert('Đã hoàn thành công việc');
    }else {
      alert('Xác nhận công việc chưa hoàn thành');
    };

    renderTasks();
  }else if(event.target.closest(".task-btn.delete")) {
    const isConfirm = confirm(`Bạn có chắc chắn muốn xóa công việc ${task.title} không?`);
    if(isConfirm) {
      delete tasks[taskIndex];
      renderTasks();
    }
  }
}


function addTask(event) {
  event.preventDefault();
    const taskTitle = inputTask.value.trim();
    if(!taskTitle) return alert('Vui lòng nhập tên công việc');

    tasks.push({
      title: taskTitle,
      completed: false,
    });

    renderTasks();
    inputTask.value = '';
}

// Sự kiện cập nhật task
function renderTasks() {
  const html = tasks.map((task, index) => {
    return `
      <li class="task-item ${task.completed ? 'completed' : ''}" task-index="${index}">
          <span class="task-title">${task.title}</span>
          <div class="task-action">
              <button class="task-btn edit"}">Edit</button>
              <button class="task-btn done">${task.completed ? 'Mark as undone' : 'Mark as done'}</button>
              <button class="task-btn delete">Delete</button>
          </div>
      </li>
    `
  }).join('');

  taskList.innerHTML = html;
}


formTask.addEventListener('submit', addTask);
taskList.addEventListener('click', handleTaskAction);

renderTasks();