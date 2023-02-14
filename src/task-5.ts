const inputEl = document.querySelector('#name-input') as HTMLInputElement;
const spanEl = document.querySelector('#name-output') as HTMLInputElement;

inputEl.addEventListener('input', () => {
    return inputEl.value ? spanEl.textContent = inputEl.value : spanEl.textContent = 'Anonymous';
});