
const body = document.querySelector('body');
const button = document.querySelector('.change-color');
const  color = document.querySelector('.color');

button.addEventListener('click', changeColor);

function changeColor() {
  color.textContent = getRandomHexColor();

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
   
  body.style.backgroundColor = color.textContent;
};