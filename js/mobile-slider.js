const sliderElement = document.querySelectorAll(".stages__slider-item-wrapper"),
  sliderLine = document.querySelector(".stages__slider-container"),
  sliderDots = document.querySelectorAll(".slider-pagination_item"),
  sliderBtnNext = document.querySelector(".slider-pagination_button--next"),
  sliderBtnPrev = document.querySelector(".slider-pagination_button--prev"),
  sliderBtn = document.querySelector(".slider-pagination_button");

// Исходные данные по слайдеру (const)

if (window.matchMedia("(max-width: 800px)").matches) {
  let sliderCount = 0,
    sliderWidth;
  // Адаптивность слайдера
  window.addEventListener("resize", showSlide);

  // Кнопки листания слайдов вперед и назад
  sliderBtnNext.addEventListener("click", nextSlide);
  sliderBtnPrev.addEventListener("click", prevSlide);

  // Функции ==================
  // Задает нужную ширину картинки и sliderLine
  function showSlide() {
    sliderWidth = document.querySelector(".stages__slider-wrapper").offsetWidth;
    sliderLine.style.width = sliderWidth * sliderElement.length + "px";
    sliderElement.forEach((item) => (item.style.width = sliderWidth + "px"));

    rollSlider();
  }
  showSlide();

  // Перелистывает слайд вперед
  function nextSlide() {
    sliderCount++;
    if (sliderCount >= sliderElement.length) sliderCount = 0;

    rollSlider();
    thisSlide(sliderCount);
  }

  // Перелистывает слайд назад
  function prevSlide() {
    sliderCount--;
    if (sliderCount < 0) sliderCount = sliderElement.length - 1;

    rollSlider();
    thisSlide(sliderCount);
  }

  // Задает шаг перемещения слайдов
  function rollSlider() {
    sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
  }

  // Указывает как слайд по счету активен
  function thisSlide(index) {
    sliderDots.forEach((item) =>
      item.classList.remove("slider-pagination_item--active")
    );
    sliderDots[index].classList.add("slider-pagination_item--active");
  }

  // Вешает клик на dot
  sliderDots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      sliderCount = index;
      rollSlider();
      thisSlide(sliderCount);
    });
  });
}
