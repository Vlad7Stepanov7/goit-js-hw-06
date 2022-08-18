

const button = document.querySelector(`.change-color`);
const span = document.querySelector(`.color`);
const body = document.body;

 body.classList.add(`change-color`);

const onButtonClickChangeColorBody = (event) => {
 function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
  body.style.backgroundColor = getRandomHexColor();
  span.textContent = body.style.backgroundColor = getRandomHexColor();
};

button.addEventListener(`click`, onButtonClickChangeColorBody);
