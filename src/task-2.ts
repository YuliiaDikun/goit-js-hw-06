const ingredients:string[] = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients') as HTMLUListElement;
const listEl = ingredients.map((ingredient:string):HTMLLIElement=> {
  const listItem = document.createElement('li') as HTMLLIElement;
  listItem.classList.add("item");
  listItem.innerText = ingredient; 
  return listItem;
});
list?.append(...listEl);      
