const valueEl = document.querySelector('#value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

decrementBtn.addEventListener('click', () => {
    return valueEl.textContent = +valueEl.textContent - 1;
});

incrementBtn.addEventListener('click', () => {
    return valueEl.textContent = +valueEl.textContent + 1;
});