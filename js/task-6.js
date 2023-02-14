"use strict";
const inputEl6 = document.querySelector('#validation-input');
inputEl6.addEventListener('blur', () => {
    if (inputEl6.value.length !== String(inputEl.dataset).length) {
        inputEl6.classList.remove('valid');
        inputEl6.classList.add('invalid');
    }
    else {
        inputEl6.classList.remove('invalid');
        inputEl6.classList.add('valid');
    }
});
//# sourceMappingURL=task-6.js.map