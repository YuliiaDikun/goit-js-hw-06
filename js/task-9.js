"use strict";
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyEl = document.querySelector('body');
const buttonColorChanger = document.querySelector('.change-color');
const spanEl9 = document.querySelector('.color');
buttonColorChanger.addEventListener('click', () => {
    const color = getRandomHexColor();
    bodyEl.style.backgroundColor = color;
    spanEl9.textContent = color;
});
//# sourceMappingURL=task-9.js.map