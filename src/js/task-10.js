

const btnCreate = document.querySelector(`[data-create]`);
const btnDestroy = document.querySelector(`[data-destroy]`);
const divContainer = document.querySelector(`#boxes`);


btnCreate.addEventListener(`click`, onCreateBoxesBtnCreateClick);

function onCreateBoxesBtnCreateClick (event) {
    createBoxes();
};
// создание боксов соответствуя значению инпута
function createBoxes() {
  const quantityBox = document.querySelector(`#controls > input`).value;
  console.log(quantityBox);
    for (let i = 1; i <= quantityBox; i += 1) { 
    createBox(i);
      
  };
};
//  создание одного бокса
function createBox(quantityBox) {
  const box = document.createElement(`div`);

  let width = 20;
  let height = 20;
//  динамическое добавление ширины и высоты взависимости от количества боксов
  for (let i = 1; i <= quantityBox; i +=1) {
    width += 10;
    height += 10;
  }

  box.classList.add(`box`);
  box.style.width = `${width}px`;
  box.style.height = `${height}px`;
  box.style.backgroundColor = getRandomHexColor();

  function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

  divContainer.before(box);
};
// очистка всех боксов
btnDestroy.addEventListener(`click`, onDestroyBoxesBtnClick);

function onDestroyBoxesBtnClick(event) {
  const boxes = document.querySelectorAll(`.box`);
  boxes.forEach(box => box.remove());
}
  




  