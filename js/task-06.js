const input = document.querySelector(`#validation-input`);

const onInputBlur = event => {
    if (event.currentTarget.value.length === 6) {
           input.classList.remove(`invalid`);
       return   input.classList.add(`valid`);
    } 
            input.classList.remove(`valid`);
      return input.classList.add(`invalid`);
};

input.addEventListener(`blur`, onInputBlur);
