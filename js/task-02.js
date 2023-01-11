const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const recepy = document.querySelector('#ingredients');

const categories = ingredients.map(ingredient => {
 
  const row = document.createElement('li');
  row.textContent = ingredient;
  row.classList.add('item');

  return row;
})

recepy.append(...categories);
console.log(categories);
console.log(recepy.textContent);

//IS IT CORRECT?