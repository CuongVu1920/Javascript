const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


function Modal() {
  this.openModal = (option = {}) => {
    const { templateId }  = option;
  
    const template = $(`#${templateId}`);

    if(!template) {
      console.error(`${template} does not exist!`);
      return;
    }

    const content = template.content.cloneNode(true);
    

    // Create modal element;
    const backdrop = document.createElement("div");
    backdrop.className = 'modal-backdrop';

    const container = document.createElement("div");
    container.className = 'modal-container';

    const closeButton = document.createElement("button");
    closeButton.className = 'modal-close';
    closeButton.innerHTML = '&times;';

    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    modalContent.append(content);

    // Append content and elements
    container.append(closeButton, modalContent);
    backdrop.append(container);
    document.body.append(backdrop);

    setTimeout(() => {
      backdrop.classList.add("show");
    }, 0);

    // Attach event listener to close button

    closeButton.addEventListener('click', () => {
      this.closeModal(backdrop)
    });

    backdrop.addEventListener("click", (event) => {
      if(event.target === backdrop) {
        this.closeModal(backdrop)
      }
    });

    document.addEventListener("keydown", (event) => {
      if(event.key === "Escape") {
        this.closeModal(backdrop)
      }
    });

  },
  this.closeModal = (modalElement) => {
    modalElement.classList.remove("show");

    // Đợi cho animation đóng modal chạy xong, rồi mới xóa element khỏi DOM.

    modalElement.addEventListener('transitionend', () => {
      modalElement.remove();
    });
  }
} 

const modal = new Modal();

// modal.openModal('<p>This is a dynamically created modal!</p>');

// $("#open-modal-1").onclick = () => {
//   modal.openModal('<h2>Modal 1</h2><p>This is the content of Modal 1.</p>');
// }

$("#open-modal-1").onclick = () => {
  modal.openModal({
    templateId: "modal-1",
  });
}


$("#open-modal-2").onclick = () => {
  modal.openModal({
    templateId: "modal-2",
  })
}

// 1. Xử lý được sự kiện submit form, lấy được các giá trị của input khi submit
// 2. Thêm tùy chọn bật/tắt cho phép click vào overlay để đóng modal
// 3. Không cho phép cuộn trang khi modal hiển thị


