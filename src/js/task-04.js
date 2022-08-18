let counterValue = 0;

const btnDecrement = document.querySelector(`[data-action="decrement"]`);
const btnIncrement = document.querySelector(`[data-action="increment"]`);
const value = document.querySelector(`#value`);

const onBtnClickAddValue = event => {
    counterValue += 1;
    value.textContent = counterValue;
}
const onBtnClickRemoveValue = event => {
    counterValue -= 1;
    value.textContent = counterValue;
}
btnDecrement.addEventListener(`click`, onBtnClickRemoveValue);
btnIncrement.addEventListener(`click`, onBtnClickAddValue);


