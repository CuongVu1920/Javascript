const tasks = JSON.parse(localStorage.getItem("tasks")) || [];



const formTask = document.querySelector(".todo-form");
const inputTask = document.querySelector("#todo-input");
const listTask = document.querySelector(".task-list");
const button = document.querySelector(".submit-btn");

function saveTask() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

button.addEventListener("mousedown", (event) => {
  event.preventDefault();
})

function checkDuplicate(listTask, newTitle, excludeIndex = -1) {
  const isDuplicate = listTask.some((task, index) => {
      return task.title.toLowerCase() === newTitle.toLowerCase() && index !== excludeIndex;
  });

    return isDuplicate;
}

function handleTaskAction(event) {
  const taskItem = event.target.closest(".task-item");
  if(!taskItem) return;

  const taskIndex = +taskItem.dataset.index;
  const task = tasks[taskIndex];

  if(event.target.closest(".task-btn.edit")) {
    let newTitle = prompt("Nhập tên công việc mới", task.title);

    if(newTitle === null) return;
    newTitle = newTitle.trim();

    if(newTitle === "") return alert("Tên công việc không được để trống");

    const isDuplicate = checkDuplicate(tasks, newTitle, taskIndex);
    if(isDuplicate) return alert("Tên công việc đã tồn tại");

    task.title = newTitle;
    renderTask();
    saveTask()
    return;
  }else if(event.target.closest(".task-btn.done")) {
    task.completed = !task.completed;
    renderTask();
    saveTask()
    return;

  }else if(event.target.closest(".task-btn.delete")) {
    const isConfirm = confirm("Bạn có chắc chắn muốn xóa công việc này không?");
    if(isConfirm) {
      tasks.splice(taskIndex, 1);
      renderTask();
      saveTask()
    }
  }
}




function addTask(event) {
  event.preventDefault();
  const newTitle = inputTask.value.trim();

  if(newTitle === "") {
    alert("Công việc không được để trống")
    return;
  }

  const isDuplicate = checkDuplicate(tasks, newTitle);

  if(isDuplicate) {
    alert("Công việc đã tồn tại")
    return;
  }

  tasks.push({
    title: newTitle,
    completed: false
  })
  renderTask()
  saveTask()
  inputTask.value = "";
}

function renderTask() {
   if(tasks.length === 0) {
      listTask.innerHTML = `<p class="no-tasks">No tasks available. Please add some tasks!</p>`;
      return;
    }

  const html = tasks.map((task, index) => {
    const safeTitle  = DOMPurify.sanitize(task.title);

        return `
          <!-- Task item -->
          <li class="task-item ${task.completed ? "completed" : ""}" data-index="${index}">
              <span class="task-title">${safeTitle}</span>
              <div class="task-action">
                  <button class="task-btn edit">Edit</button>
                  <button class="task-btn done">Mark as done</button>
                  <button class="task-btn delete">Delete</button>
              </div>
          </li>  
        `
      }).join("");

    listTask.innerHTML = html;
}

formTask.addEventListener("submit", addTask);
listTask.addEventListener("click", handleTaskAction);


renderTask()