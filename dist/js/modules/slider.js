const slider = (sliderSelector, imgSelector, leftArrowSelector, rightArrowSelector) => {
  const slider = document.querySelector(sliderSelector);
  const images = document.querySelectorAll(imgSelector);
  const btnLeft = document.querySelector(leftArrowSelector);
  const btnRight = document.querySelector(rightArrowSelector);

  if (!slider || images.length === 0 || !btnLeft || !btnRight) {
    console.warn('Слайдер не найден или элементы отсутствуют');
    return;
  }

  const visibleSlides = 2;
  const style = getComputedStyle(images[0]);
  const margin = parseFloat(style.marginLeft) + parseFloat(style.marginRight);
  const imageWidth = images[0].getBoundingClientRect().width + margin;

  let currentIndex = 0;
  const maxIndex = images.length - visibleSlides;

  function updateSlider() {
    const offset = -currentIndex * imageWidth;
    slider.style.transform = `translateX(${offset}px)`;
  }

  btnRight.addEventListener('click', () => {
    if (currentIndex < maxIndex) {
      currentIndex++;
      updateSlider();
    }
  });

  btnLeft.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  });
}

export default slider;


