"use strict";
const inputEl7 = document.querySelector('#font-size-control');
const spanEl7 = document.querySelector('#text');
inputEl7.addEventListener('input', () => {
    const fontSizeInput = inputEl7.value;
    spanEl7.style.fontSize = `${fontSizeInput}px`;
});
//# sourceMappingURL=task-7.js.map