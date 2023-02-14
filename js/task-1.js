"use strict";
const items = document.querySelectorAll('.item');
console.log(`Number of categories: ${items.length}`);
items.forEach(item => {
    const title = item.firstElementChild;
    const itemList = item.lastElementChild;
    console.log(`Category: ${title === null || title === void 0 ? void 0 : title.textContent}`);
    console.log(`Elements: ${itemList === null || itemList === void 0 ? void 0 : itemList.children.length}`);
});
//# sourceMappingURL=task-1.js.map