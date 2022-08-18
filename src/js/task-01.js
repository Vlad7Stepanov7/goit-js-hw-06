

const list = document.querySelector(`#categories`);


const numberOfCategories = list.children.length;
console.log(`Number of categories:`, numberOfCategories);

const items = document.querySelectorAll(`.item`);

const listElements = document.querySelector(`.item > ul`);

const numberOfElements = listElements.children.length;

const displayTitleAndElements = items.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${numberOfElements}`);
});
