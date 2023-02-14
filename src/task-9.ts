function getRandomHexColor():string {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body')!;
const buttonColorChanger = document.querySelector('.change-color') as HTMLButtonElement;
const spanEl9 = document.querySelector('.color') as HTMLSpanElement;

buttonColorChanger.addEventListener('click', ():void => {
  const color:string = getRandomHexColor();
  bodyEl.style.backgroundColor = color;
  spanEl9.textContent = color;
});