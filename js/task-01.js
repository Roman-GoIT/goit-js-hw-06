//кількість категорій
//const categoriesNumber = document.querySelectorAll('li.item');
//console.log('Number of categories:', categoriesNumber);

//кількість елементів
//const elementsNumber = document.querySelectorAll('.option');
//console.log(elementsNumber);


//console.log(categoriesNumber)
function quantity(categoriesNumber) {
    let totalNumber = 0;

    categoriesNumber.forEach((item) => totalNumber += item);
      return totalNumber;
      console.log(totalNumber);
}

