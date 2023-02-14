"use strict";
const valueEl = document.querySelector('#value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
;
let counterValue = 0;
decrementBtn.addEventListener('click', () => {
    counterValue--;
    return valueEl.textContent = String(counterValue);
});
incrementBtn.addEventListener('click', () => {
    counterValue++;
    return valueEl.textContent = String(counterValue);
});
//# sourceMappingURL=task-4.js.map