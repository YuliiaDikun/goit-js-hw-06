"use strict";
function getRandomHexColor10() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const inputEl10 = document.querySelector('input[type="number"]');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const divBox = document.querySelector('#boxes');
function createBoxes(amount) {
    const divColection = [];
    for (let i = 1; i <= amount; i++) {
        let color = getRandomHexColor10();
        let width = `${10 * i}px`;
        let height = `${10 * i}px`;
        const div = document.createElement('div');
        div.style.width = width;
        div.style.height = height;
        div.style.backgroundColor = color;
        divColection.push(div);
    }
    divBox.append(...divColection);
}
function clearDivHTML() {
    divBox.innerHTML = '';
    inputEl10.value = '';
}
createBtn.addEventListener('click', () => {
    let value = inputEl10.value;
    if (value === '') {
        alert('Please enter a number!');
    }
    else {
        createBoxes(Number(value));
    }
});
destroyBtn.addEventListener('click', clearDivHTML);
//# sourceMappingURL=task-10.js.map