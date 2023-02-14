const items = document.querySelectorAll('.item') as NodeListOf<Element>;

console.log(`Number of categories: ${items.length}`);

items.forEach(item => {    
    const title = item.firstElementChild;
    const itemList = item.lastElementChild;
    console.log(`Category: ${title?.textContent}`);    
    console.log(`Elements: ${itemList?.children.length}`);
});
