const valueEl = document.querySelector('#value') as HTMLSpanElement;
const decrementBtn = document.querySelector('[data-action="decrement"]') as HTMLButtonElement;
const incrementBtn = document.querySelector('[data-action="increment"]') as HTMLButtonElement;;

let counterValue:number = 0;

decrementBtn.addEventListener('click', () => {
    counterValue--;   
    return valueEl.textContent = String(counterValue);
});

incrementBtn.addEventListener('click', () => {
    counterValue++;   
    return valueEl.textContent = String(counterValue);
});