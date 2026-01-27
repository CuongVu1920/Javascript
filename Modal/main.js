const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

  // <!-- Modal 3 -->
  // <div id="modal-3" class="modal-backdrop">
  //   <div class="modal-container">
  //     <button class="modal-close">&times;</button>
  //     <div class="modal-content">
  //       <p>
  //         ....
  //       </p>
  //     </div>

  //   </div>
  // </div>


function Modal() {
  this.openModal = (option = {}) => {
    const { templateId } = option;
    console.log(templateId);
    
    const template = $(`#${templateId}`);

    if(!template) {
      console.error(`${template} does not exist!`);
      return;
    }

    const content = template.content.cloneNode(true);


    // Create modal elements
    const backdrop = document.createElement('div');
    backdrop.className = 'modal-backdrop';

    const container = document.createElement('div');
    container.className = 'modal-container';

    const closeButton = document.createElement('button');
    closeButton.className = 'modal-close';
    closeButton.innerHTML = '&times;';

    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    
    // Append content and elements
    modalContent.append(content);
    container.append(closeButton, modalContent);
    backdrop.append(container);
    document.body.append(backdrop);


    setTimeout(() => {
      backdrop.classList.add("show");
    }, 0);

    // Attach event listener to close button
    closeButton.addEventListener('click', () => {
      this.closeModal(backdrop);
    });

    backdrop.onclick = (event) => {
      if(event.target === backdrop) {
        this.closeModal(backdrop);
      }
    };

    document.addEventListener('keydown', (event) => {
      if(event.key === 'Escape') {
        this.closeModal(backdrop);
      }
    });

  };

  this.closeModal = (modalElement) => {
    modalElement.classList.remove("show");
    modalElement.addEventListener('transitionend', () => {
      modalElement.remove();
    });
  }

}


const modal = new Modal();
// modal.openModal('<p>This is a dynamically created modal!</p>');

$("#open-modal-1").onclick = () => {
  modal.openModal({
    templateId: "modal-1",
  });
}


$("#open-modal-2").onclick = () => {
  modal.openModal({
    templateId: "modal-2",
  });
}


$("#open-modal-3").onclick = () => {
  modal.openModal('<h2>Modal 3</h2><p>This is the content of Modal 3.</p>');
}


// 1. Xử lý được sự kiện submit form, lấy được các giá trị của input khi submit
// 2. Thêm tùy chọn bật/tắt cho phép click vào overlay để đóng modal
// 3. Không cho phép cuộn trang khi modal hiển thị



