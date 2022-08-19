const images = [
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const list = document.querySelector(`.gallery`);
// const liContainer = [];
// const imagesContainer = [];

// создал и запушил фото в масссив
// const createimage = images.map(data => {
//   const image = document.createElement(`img`);
//   image.src = data.url;
//   image.alt = data.alt;
//   image.width = 480;
//   imagesContainer.push(image);
// });

// // создал li добавил в них фото и запушил в массив
// const createLi = imagesContainer.map(image => {
//     const li = document.createElement(`li`);
//   li.append(image);
//   li.classList.add(`gallery__item`)
//     liContainer.push(li);
// });

// list.append(...liContainer);

const makeGalleryMarkup = ({ url, alt }) => {
  return `
  <li class="gallery__item"><img src="${url}" alt="${alt}" width="480"></li>
  `;
};

const makeGalleryRows = images
  .map(makeGalleryMarkup)
  .join(` `);
console.log(makeGalleryRows);
list.insertAdjacentHTML(`beforeend`, makeGalleryRows)

