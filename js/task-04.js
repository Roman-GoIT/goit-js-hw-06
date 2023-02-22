// Відображає поточне значення лічильника
const counterValue = document.querySelector('.js-value');
//counterValue = 0;
console.log(counterValue);
//counterValue.textContent; - maybe this option


//Кнопка віднімання
const decrement = document.querySelector('.js-decr');
console.log(decrement);

decrement.addEventListener('click', minus);
let step = 1;

function minus(evt) {
    console.log(evt.currentTarget);
    //counterValue -= step;
    step -= 1;
    counterValue.textContent;
}

//Кнопка додавання
const increment = document.querySelector('.js-incr');
console.log(increment);

increment.addEventListener('click', plus);
function plus(evt) {
    console.log(evt.currentTarget);
    step += 1;
    //increment.textContent; - може цей варіант
    counterValue.textContent;
}