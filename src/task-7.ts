const inputEl7 = document.querySelector('#font-size-control') as HTMLInputElement;
const spanEl7 = document.querySelector('#text') as HTMLSpanElement;

inputEl7.addEventListener('input', () => {    
    const fontSizeInput:string = inputEl7.value;    
    spanEl7.style.fontSize = `${fontSizeInput}px`;
});