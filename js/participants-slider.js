const participantsSliderElement = document.querySelectorAll(
    ".participants__slide"
  ),
  participantsSliderLine = document.querySelector(
    ".participants__slider-wrapper"
  ),
  //   participantsSliderDots = document.querySelectorAll(".slider-pagination_item"),
  participantsSliderBtnNext = document.querySelector(
    ".participants__slider-pagination_button--next"
  ),
  participantsSliderBtnPrev = document.querySelector(
    ".participants__slider-pagination_button--prev"
  ),
  participantsSliderBtn = document.querySelector(
    ".participants__slider-pagination_button"
  );

// Исходные данные по слайдеру (const)

let sliderCount = 0,
  sliderWidth;
// Адаптивность слайдера
// window.addEventListener("resize", participantsshowSlide);

// Кнопки листания слайдов вперед и назад
participantsSliderBtnNext.addEventListener("click", participantsnextSlide);
participantsSliderBtnPrev.addEventListener("click", participantsprevSlide);
// Функции ==================
// setInterval(() => participantsnextSlide(), 3000);
// Задает нужную ширину картинки и sliderLine
function participantsshowSlide() {
  participantsSliderWidth = document.querySelector(
    ".participants__slider-wrapper"
  ).offsetWidth;
  participantsSliderLine.style.width =
    participantsSliderWidth * participantsSliderElement.length + "px";
  participantsSliderElement.forEach(
    (item) => (item.style.width = participantsSliderWidth + "px")
  );

  participantsrollSlider();
}
participantsshowSlide();

// Перелистывает слайд вперед
function participantsnextSlide() {
  sliderCount++;
  if (sliderCount >= participantsSliderElement.length) sliderCount = 0;

  participantsrollSlider();
  participantsthisSlide(sliderCount);
}

// Перелистывает слайд назад
function participantsprevSlide() {
  sliderCount--;
  if (sliderCount < 0) sliderCount = participantsSliderElement.length - 1;

  participantsrollSlider();
  participantsthisSlide(sliderCount);
}

// Задает шаг перемещения слайдов
function participantsrollSlider() {
  participantsSliderLine.style.transform = `translateX(${
    -sliderCount * participantsSliderWidth
  }px)`;
}

// // Указывает как слайд по счету активен
// function thisSlide(index) {
//   sliderDots.forEach((item) =>
//     item.classList.remove("slider-pagination_item--active")
//   );
//   sliderDots[index].classList.add("slider-pagination_item--active");
// }

// // Вешает клик на dot
// sliderDots.forEach((dot, index) => {
//   dot.addEventListener("click", () => {
//     sliderCount = index;
//     rollSlider();
//     thisSlide(sliderCount);
//   });
// });

console.log(participantsthisSlide());
