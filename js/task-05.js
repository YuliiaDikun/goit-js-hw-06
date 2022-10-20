const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

inputEl.addEventListener('input', () => {
    return inputEl.value ? spanEl.textContent = inputEl.value : spanEl.textContent = 'Anonymous';
});