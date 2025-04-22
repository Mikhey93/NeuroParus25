const fixedMenu = (headerSelector, headerActiveClass) => {
  const bottomWrapper = document.querySelector(headerSelector);
  const bottomWrapperOffset = bottomWrapper.offsetTop;

  window.addEventListener('scroll', function () {
    if (window.scrollY >= bottomWrapperOffset) {
      bottomWrapper.classList.add(headerActiveClass);
    } else {
      bottomWrapper.classList.remove(headerActiveClass);
    }
  });
}

export default fixedMenu;
