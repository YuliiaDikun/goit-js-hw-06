const inputEl6 = document.querySelector('#validation-input') as HTMLInputElement;

inputEl6.addEventListener('blur', () => {  
   
    if (inputEl6.value.length !== Number(inputEl6.dataset.length)) {        
        inputEl6.classList.remove('valid');
        inputEl6.classList.add('invalid');
    } else {
        inputEl6.classList.remove('invalid');
        inputEl6.classList.add('valid');
    }
});