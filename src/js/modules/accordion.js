const accordion = (cardSelector, topCardSelector, bottomCardSelector, iconSelector, newIconClass, newBottomClass) => {
  const accordionCards = [...document.querySelectorAll(cardSelector)].map(card => {
    return {
      card,
      top: card.querySelector(topCardSelector),
      icon: card.querySelector(iconSelector),
      bottom: card.querySelector(bottomCardSelector),
    };
  });

  accordionCards.forEach(({ card, icon, bottom }) => {
    if (!icon || !bottom) return;

    card.addEventListener('click', function () {
      // Закрываем все остальные аккордеоны
      accordionCards.forEach(other => {
        if (other.card !== card) {
          if (other.icon && other.bottom) {
            other.icon.classList.remove(newIconClass);
            other.bottom.classList.remove(newBottomClass);
          }
        }
      });

      const isActive = bottom.classList.contains(newBottomClass);

      if (isActive) {
        icon.classList.remove(newIconClass);
        bottom.classList.remove(newBottomClass);
      } else {
        icon.classList.add(newIconClass);
        bottom.classList.add(newBottomClass);
      }
    });
  });
};

export default accordion;
