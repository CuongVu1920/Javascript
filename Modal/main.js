const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const openModal = $("#open-modal");
const modal = $("#modal");
const closeModal = $("#modal-close");


openModal.addEventListener("click", () => {
  modal.classList.add("show");

})

closeModal.addEventListener("click", () => {
  modal.classList.remove("show");
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.remove("show");
  } 
});

document.addEventListener('keydown', (event) => {
  if(event.key === "Escape") {
    modal.classList.remove("show");
  }
});


