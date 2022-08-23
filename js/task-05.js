
const input = document.querySelector(`#name-input`);
const span = document.querySelector(`#name-output`);

const onInputChange = event => {
    if (event.currentTarget.value.length === 0) {
       return span.textContent = `Anonymous`;
    }
    span.textContent = event.currentTarget.value;
};

input.addEventListener(`input`, onInputChange);

