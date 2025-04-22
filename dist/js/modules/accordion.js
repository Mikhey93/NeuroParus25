const accordion = (cardSelector, topCardSelector, bottomCardSelector, iconSelector, newIconClass, newBottomClass) => {
  const accordionCards = document.querySelectorAll(cardSelector);

  accordionCards.forEach(card => {
    const accordionTop = card.querySelector(topCardSelector);
    const accordionIcon = card.querySelector(iconSelector);
    const accordionBottom = card.querySelector(bottomCardSelector);


    accordionCards.forEach(card => {
      const accordionIcon = card.querySelector(iconSelector);
      const accordionBottom = card.querySelector(bottomCardSelector);

      card.addEventListener('click', function () {
        accordionCards.forEach(otherCard => {
          if (otherCard !== card) {
            otherCard.querySelector(iconSelector).classList.remove(newIconClass);
            otherCard.querySelector(bottomCardSelector).classList.remove(newBottomClass);
          }
        });

        const isActive = accordionBottom.classList.contains(newBottomClass);

        if (isActive) {
          accordionIcon.classList.remove(newIconClass);
          accordionBottom.classList.remove(newBottomClass);
        } else {
          accordionIcon.classList.add(newIconClass);
          accordionBottom.classList.add(newBottomClass);
        }
      });
    });
  });

}


export default accordion;

