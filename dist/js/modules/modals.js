const modals = () => {
  function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
    const trigger = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      close = document.querySelector(closeSelector),
      windows = document.querySelectorAll('[data-modal]'),
      scroll = calcScroll(),
      overlay = document.querySelector('.overlay');

    if (!modal || !overlay) return;

    function openModal() {
      windows.forEach(item => {
        item.style.display = 'none';
        item.style.opacity = '0';
      });

      overlay.style.display = 'block';
      modal.style.display = 'block';
      document.body.style.overflow = 'hidden';
      document.body.style.marginRight = `${scroll}px`;

      setTimeout(() => {
        overlay.style.opacity = '1';
        modal.style.opacity = '1';
      }, 10);
    }

    function closeModal() {
      overlay.style.opacity = '0';
      modal.style.opacity = '0';

      setTimeout(() => {
        windows.forEach(item => {
          item.style.display = 'none';
        });
        overlay.style.display = 'none';
        modal.style.display = 'none';
        document.body.style.overflow = '';
        document.body.style.marginRight = `0px`;
        overlay.style.opacity = '';
        modal.style.opacity = '';
      }, 300);
    }

    trigger.forEach(item => {
      item.addEventListener('click', (e) => {
        if (e.target) e.preventDefault();
        openModal();
      });
    });

    close.addEventListener('click', closeModal);

    overlay.addEventListener('click', (e) => {
      if (e.target === overlay && closeClickOverlay) {
        closeModal();
      }
    });
  }

  function calcScroll() {
    let div = document.createElement('div');
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';
    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();
    return scrollWidth;
  }

  // Modals at therapy.html page
  bindModal('.programs-therapy__btn', '.parents-modal', '.parents-modal__close');
  bindModal('.promo-therapy__btn', '.parents-modal', '.parents-modal__close');
  // Modals at parents.html page
  bindModal('.promo-parents__btn', '.parents-modal', '.parents-modal__close');
  bindModal('.card__btn-modal', '.parents-modal', '.parents-modal__close');
  // Modals at specialists.html page
  bindModal('.specialists-promo__btn', '.specialist-modal', '.specialist-modal__close');
  // Modals at contacts.html page
  bindModal('.contacts__btn', '.thanks-modal', '.thanks-modal__close')
};

export default modals;