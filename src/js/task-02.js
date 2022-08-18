const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const firstLi = document.createElement(`li`);
firstLi.textContent = `Potatoes`;
firstLi.classList.add(`item`);

const secondLi = document.createElement(`li`);
secondLi.textContent = `Mushrooms`;
secondLi.classList.add(`item`);

const thridLi = document.createElement(`li`);
thridLi.textContent = `Garlic`;
thridLi.classList.add(`item`);

const fourthdLi = document.createElement(`li`);
fourthdLi.textContent = `Tomatos`;
fourthdLi.classList.add(`item`);

const fifthLi = document.createElement(`li`);
fifthLi.textContent = `Herbs`;
fifthLi.classList.add(`item`);

const sixthLi = document.createElement(`li`);
sixthLi.textContent = `Condiments`;
sixthLi.classList.add(`item`);

const list = document.querySelector(`#ingredients`);

list.prepend(firstLi, secondLi, thridLi, fourthdLi, fifthLi, sixthLi);
