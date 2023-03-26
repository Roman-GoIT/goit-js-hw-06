

const text =  document.querySelector('#name-input');
const  textAfter = document.querySelector('#name-output');

text.addEventListener('input', (event) => {
  textAfter.textContent = event.currentTarget.value;

  if (event.currentTarget.value.trim() === "") {
    textAfter.textContent = 'Anonymous';
  }
});

