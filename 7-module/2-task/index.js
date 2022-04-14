import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.modalDiv = createElement(`
      <div class="modal">
        <!--Прозрачная подложка перекрывающая интерфейс-->
        <div class="modal__overlay"></div>

        <div class="modal__inner">
          <div class="modal__header">
            <!--Кнопка закрытия модального окна-->
            <button type="button" class="modal__close">
              <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
            </button>

            <h3 class="modal__title">
              Вот сюда нужно добавлять заголовок
            </h3>
          </div>

          <div class="modal__body">
            A сюда нужно добавлять содержимое тела модального окна
          </div>
        </div>

      </div>
    `);
    this.render();
  }

  setTitle(modal__title){
    this.modalDiv.querySelector('.modal__title').textContent = modal__title;
  }

  setBody(modal__body) {
    const modalBodyDiv = this.modalDiv.querySelector('.modal__body');
    modalBodyDiv.removeChild(modalBodyDiv.firstChild);
    modalBodyDiv.append(modal__body);
  }

  open() {
    document.body.classList.add('is-modal-open');
    document.body.insertAdjacentElement('beforeend', this.modalDiv);
  }

  render() {
    document.addEventListener('keydown', (e) => {
      if(e.code === 'Escape'){
        this.close();
      }
    });
    this.modalDiv.querySelector('.modal__close').addEventListener('click', () => {
      this.close();
    });
  }

  close(){
    document.body.classList.remove('is-modal-open');
    this.modalDiv.remove();
  }
}