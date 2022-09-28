const input = document.querySelector(`#font-size-control`);
const span = document.querySelector(`#text`);
span.classList.add(`font-size`);

const fontSizeBySpan = () => span.style.fontSize = `${input.value}px`;

input.addEventListener(`input`, fontSizeBySpan);