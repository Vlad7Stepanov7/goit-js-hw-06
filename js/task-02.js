const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const liMurkup = ingredients.map(element => {
  const li = document.createElement(`li`);
  li.classList.add(`item`);
  li.textContent = element;
  return li;
})

const list = document.querySelector(`#ingredients`);

list.prepend(...liMurkup);
