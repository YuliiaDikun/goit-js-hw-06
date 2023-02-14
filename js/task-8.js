"use strict";
const formEl = document.querySelector(".login-form");
formEl.addEventListener("submit", formValidation);
function formValidation(e) {
    e.preventDefault();
    const target = e.currentTarget;
    const elements = target.elements;
    if (!elements.email.value || !elements.password.value) {
        alert("Please fill in all the fields!");
        return;
    }
    console.log(`Email: ${elements.email.value}, Password: ${elements.password.value}`);
    target.reset();
}
//# sourceMappingURL=task-8.js.map