

const btnCreate = document.querySelector(`[data-create]`);
const btnDestroy = document.querySelector(`[data-destroy]`);
const divContainer = document.querySelector(`#boxes`);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

const container = [];

let width = 20;
let height = 20;

btnCreate.addEventListener(`click`, onCreateBoxesBtnCreateClick);

function onCreateBoxesBtnCreateClick (event) {
    createBoxes();
};
// создание нужного количества боксов соответствуя значению инпута
function createBoxes() {
  const quantityBox = document.querySelector(`#controls > input`).value;
    for (let i = 1; i <= quantityBox; i += 1) { 
    createBox();     
  };
  divContainer.before(...container); 
};
//  создание одного бокса
function createBox() {
    const box = document.createElement(`div`);
    
    width += 10;
    height += 10;
     
  box.classList.add(`box`);
  box.style.width = `${width}px`;
  box.style.height = `${height}px`;
  box.style.backgroundColor = getRandomHexColor();

   container.push(box);
};
 


// очистка всех боксов
btnDestroy.addEventListener(`click`, onDestroyBoxesBtnClick);

function onDestroyBoxesBtnClick(event) {
  const boxes = document.querySelectorAll(`.box`);
  boxes.forEach(box => box.remove());

  container.splice(0);

  width = 20;
  height = 20;
}
  




  