function getRandomHexColor10():string {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl10 = document.querySelector('input[type="number"]') as HTMLInputElement;
const createBtn = document.querySelector('[data-create]') as HTMLButtonElement;
const destroyBtn = document.querySelector('[data-destroy]') as HTMLButtonElement;
const divBox = document.querySelector('#boxes') as HTMLDivElement;

function createBoxes(amount:number):void { 
  const divColection:HTMLDivElement[] = [];
  for (let i = 1; i <= amount; i++) {
    let color:string = getRandomHexColor10();
    let width:string = `${10 * i}px`;
    let height:string = `${10 * i}px`;
    
    const div = document.createElement('div');    
    
    div.style.width = width;    
    div.style.height = height;
    
    div.style.backgroundColor = color;
    
    divColection.push(div);
  } 
  divBox.append(...divColection);
}

function clearDivHTML():void { 
  divBox.innerHTML = '';
  inputEl10.value = '';
}

createBtn.addEventListener('click', ():void => { 
  let value:string = inputEl10.value;  
  if (value === '') {
    alert('Please enter a number!')
  } else { 
    createBoxes(Number(value));
  }  
});

destroyBtn.addEventListener('click', clearDivHTML);
