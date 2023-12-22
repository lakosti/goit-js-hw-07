const categoriesList = document.querySelector('#categories > .item');
const items = document.querySelectorAll('.item');

console.log(`Number of categories: ${categoriesList.children.length}`);

items.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});
