function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector('input[type="number"]');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const divBox = document.querySelector('#boxes');

function createBoxes(amount) {    
  for (let i = 1; i <= amount; i++) {
    let color = getRandomHexColor();
    let width = `${10 * i}px`;
    let height = `${10 * i}px`;
    
    const div = document.createElement('div');    
    
    div.style.width = width;    
    div.style.height = height;
    
    div.style.backgroundColor = color;
    
    divBox.append(div);
  }    
}

function clearDivHTML() { 
  divBox.innerHTML = '';
}

createBtn.addEventListener('click', () => { 
  let number = inputEl.value
  createBoxes(number);
});

destroyBtn.addEventListener('click', clearDivHTML);
