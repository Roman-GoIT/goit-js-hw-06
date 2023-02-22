//кількість категорій
const categoriesNumber = document.querySelectorAll('li.item');
console.log('Number of categories:', categoriesNumber.length);


 categoriesNumber.forEach(category => {
//Назва категорії
 console.log('Category:', category.firstElementChild.textContent);
 //Кількість елементів
 console.log('Elements:', category.lastElementChild.children.length)
 })
