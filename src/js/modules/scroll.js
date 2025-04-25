const scrollToTop = () => {
  window.addEventListener('scroll', function () {
    const pageUpBtn = document.querySelector('.pageup');
    if (window.scrollY > 400) {
      pageUpBtn.classList.add('show');
    } else {
      pageUpBtn.classList.remove('show');
    }
  });

  document.querySelector('.pageup').addEventListener('click', function (event) {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

export default scrollToTop;