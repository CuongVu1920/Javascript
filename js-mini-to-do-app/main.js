const tasks = JSON.parse(localStorage.getItem('tasks')) || [];


const taskList = document.getElementById('task-list');
const formTask = document.querySelector('.todo-form');
const inputTask = document.querySelector('#todo-input');
const textNoTasks = document.querySelector('.no-tasks');


function checkDuplicate(listTask, newTitle, excludeIndex = -1) {

  return listTask.some((task, index) => task.title.toLowerCase() === newTitle.toLowerCase() && excludeIndex !== index);  
}

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// localStorage.setItem() nghĩa là Lưu tasks vào localStorage


function handleTaskAction(event) {
  const taskItem = event.target.closest('.task-item');
  const taskIndex = +taskItem.getAttribute('task-index');
  const task = tasks[taskIndex];

  if(event.target.closest(".task-btn.edit")) {
    let newTitle = prompt("Nhập tên công việc mới", task.title);
    
    if(newTitle === null) return; // Người dùng nhấn hủy

    newTitle = newTitle.trim();
    if(newTitle === '') return alert('Tên công việc không được để trống');

    const hasDuplicate = checkDuplicate(tasks, newTitle, taskIndex); 
    if(hasDuplicate) return alert('Tên công việc đã tồn tại');

    task.title = newTitle;
    renderTasks();
    saveTasks();
    return;
   
  }else if(event.target.closest(".task-btn.done")) {
    task.completed = !task.completed;
    renderTasks();
    saveTasks();
    return;
  }else if(event.target.closest(".task-btn.delete")) {
    const isConfirm = confirm(`Bạn có chắc chắn muốn xóa công việc ${task.title} không?`);
    if(isConfirm) {
      tasks.splice(taskIndex, 1); // array.splice(start, deleteCount, item1, item2, ...)
      renderTasks();
      saveTasks();
    }
  }
}


function addTask(event) {
  event.preventDefault();
    const taskTitle = inputTask.value.trim();
    if(!taskTitle) return alert('Vui lòng nhập tên công việc');

    const hasDuplicate = checkDuplicate(tasks, taskTitle);  
    if(hasDuplicate) return alert('Tên công việc đã tồn tại');

    tasks.push({
      title: taskTitle,
      completed: false,
    });

    renderTasks();
    saveTasks();
    inputTask.value = '';
}

// Sự kiện cập nhật task
function renderTasks() {
  if(tasks.length === 0) {
    textNoTasks.textContent = 'No tasks available. Please add a task!';
    taskList.innerHTML = '';
    return;
  }


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
  textNoTasks.textContent = '';

  taskList.innerHTML = html;
}


formTask.addEventListener('submit', addTask);
taskList.addEventListener('click', handleTaskAction);

renderTasks();