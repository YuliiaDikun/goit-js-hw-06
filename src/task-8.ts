const formEl = document.querySelector(".login-form") as HTMLFormElement;

interface FormElements extends HTMLFormControlsCollection {
  email: HTMLInputElement;
  password: HTMLInputElement;
}

formEl.addEventListener("submit", formValidation);

function formValidation(e: Event): void {
  e.preventDefault();
  const target = e.currentTarget as HTMLFormElement;
  const elements = target.elements as FormElements;

  if (!elements.email.value || !elements.password.value) {
    alert("Please fill in all the fields!");
    return;
  }

  console.log(
    `Email: ${elements.email.value}, Password: ${elements.password.value}`
  );
  target.reset();
}
