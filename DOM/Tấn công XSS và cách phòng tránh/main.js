const submit = document.querySelector('#submit');
const input = document.querySelector('#chat-input');
const messages = document.querySelector('#messages');

// ##sử dụng innerHTML

// submit.addEventListener("click", () => {

//   messages.innerHTML = `${messages.innerHTML} <li>${input.value}</li>`;
//   input.value = "";
// })


// # sử dụng createElement

submit.addEventListener("click", () => {
  const li = document.createElement("li");
  li.innerText = input.value;

  messages.appendChild(li);
  input.value = "";
  
}) 

// XSS - Cross Site Scripting

