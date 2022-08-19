
const input = document.querySelector(`#name-input`);
const span = document.querySelector(`#name-output`);

const onInputChange = event => {
   
    span.textContent = event.currentTarget.value;
};

input.addEventListener(`input`, onInputChange);

