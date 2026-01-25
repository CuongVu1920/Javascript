const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let currentModal = null;

const listOpenModal = $$("[data-modal]");

listOpenModal.forEach((btn) => {
 btn.onclick = function() {
  modal = $(this.dataset.modal);

  if(modal) {
    modal.classList.add("show");
    currentModal = modal;
  }else {
    console.error(`${this.dataset.modal} not found`)
  }
 }
});

const modalCloseList = $$(".modal-close");

modalCloseList.forEach((btn) => {
  btn.onclick = function() {
    const modal = this.closest(".modal-backdrop");
    if(modal) {
      modal.classList.remove("show");
      currentModal = null;
    }else {
      console.error("modal not found")
    }
  }
});

const listModal = $$(".modal-backdrop");

listModal.forEach(modal => {
  modal.onclick = function(event) {

    if(event.target === this) {
      this.classList.remove("show");
      currentModal = null;
    }    
  }
})

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && currentModal) {
      currentModal.classList.remove("show");
      currentModal = null;
  }
})






