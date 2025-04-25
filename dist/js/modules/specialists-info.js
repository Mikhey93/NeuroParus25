const specialistsInfoModals = () => {
  const overlay = document.querySelector('.overlay');
  const modals = document.querySelectorAll('.info-modal');
  const buttons = document.querySelectorAll('[data-id]');

  if (!overlay || modals.length === 0 || buttons.length === 0) return;

  buttons.forEach(button => {
    button.addEventListener('click', function () {
      const targetId = this.dataset.id;
      const targetModal = document.getElementById(targetId);

      if (targetModal) {
        modals.forEach(modal => modal.style.display = 'none');
        overlay.style.display = 'flex';
        targetModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
      }
    });
  });

  function closeOverlay() {
    overlay.style.display = 'none';
    modals.forEach(modal => modal.style.display = 'none');
    document.body.style.overflow = '';
  }

  modals.forEach(modal => {
    const closeBtn = modal.querySelector('.info-modal__close');
    if (closeBtn) {
      closeBtn.addEventListener('click', closeOverlay);
    }
  });

  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) {
      closeOverlay();
    }
  });
}

export default specialistsInfoModals;