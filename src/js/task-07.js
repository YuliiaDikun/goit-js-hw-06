const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

inputEl.addEventListener('input', () => {    
    const fontSizeInput = inputEl.value;    
    spanEl.style.fontSize = `${fontSizeInput}px`;
});