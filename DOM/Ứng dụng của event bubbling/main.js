const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const addButton = document.getElementById('add-todo');

todoList.addEventListener('click', (event) => {
  alert(`Bạn đã chọn công việc: ${event.target.textContent}`);
})

// Tại sao khi trỏ vào todoList mà không phải là li thì vẫn hiện alert?
// Vì event bubbling, sự kiện click được phát sinh từ các phần tử con (li) sẽ "bong bóng" lên đến phần tử cha (todoList). 
// Khi ta click vào một phần tử con, sự kiện sẽ được xử lý bởi phần tử cha nếu không có trình xử lý sự kiện cụ thể trên phần tử con đó.
// Do đó, khi ta click vào bất kỳ đâu trong todoList, kể cả khi không phải là li, sự kiện click vẫn được bắt bởi todoList và hiển thị alert.

// Hiểu đơn giản là khi click vào một phần tử con, sự kiện sẽ "bong bóng" lên đến phần tử cha và được xử lý ở đó nếu 
// không có trình xử lý sự kiện cụ thể trên phần tử con.


addButton.addEventListener('click', () => {
  const value = todoInput.value;

  if(value.trim() === '') return;

  const li = document.createElement('li');
  li.textContent = value;

  todoList.appendChild(li);

  todoInput.value = '';  

  
})

// const liList = todoList.querySelectorAll('li');

// liList.forEach(li => {
//   li.addEventListener('click', (event) => {
//     alert(`Bạn đã chọn công việc: ${event.target.textContent}`);
    
//   })
// })