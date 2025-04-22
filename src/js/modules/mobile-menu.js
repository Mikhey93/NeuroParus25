const mobMenu = (humbSelector, menuSelector, humbClassSelector, menuClassSelector) => {

  const humb = document.querySelector(humbSelector);
  const menu = document.querySelector(menuSelector);

  humb.addEventListener('click', function (e) {
    e.preventDefault();
    if (this.classList.contains(humbClassSelector)) {
      this.classList.remove(humbClassSelector);
      menu.classList.remove(menuClassSelector);
      document.body.classList.remove('no-scroll');
    }
    else {
      this.classList.add(humbClassSelector);
      menu.classList.add(menuClassSelector);
      document.body.classList.add('no-scroll');
    }
  });

  document.addEventListener('click', function (e) {
    if (!menu.contains(e.target) && !humb.contains(e.target)) {
      humb.classList.remove(humbClassSelector);
      menu.classList.remove(menuClassSelector);
      document.body.classList.remove('no-scroll');
    }
  });
}

export default mobMenu;