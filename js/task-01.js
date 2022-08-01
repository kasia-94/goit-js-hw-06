const itemList = document.querySelector("#categories");
console.log(`Number of categories:`, itemList.children.length);

const articleName = document.querySelectorAll(".item h2");
const articleEl = document.querySelectorAll(".item ul");

console.log(`Category:`, articleName[0].textContent);
console.log(`Elements:`, articleEl[0].children.length);

console.log(`Category:`, articleName[1].textContent);
console.log(`Elements:`, articleEl[1].children.length);

console.log(`Category:`, articleName[2].textContent);
console.log(`Elements:`, articleEl[2].children.length);
