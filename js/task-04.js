const counter = document.querySelector("#value");
const increment = document.querySelector('button[data-action = "increment"]');
const decrement = document.querySelector('button[data-action = "decrement"]');

let counterValue = 0;

increment.addEventListener("click", upClick);
 
function upClick() {
    counterValue += 1;
    counter.textContent = counterValue;
};

decrement.addEventListener("click", downClick);
  
function  downClick() {
    counterValue -= 1;
    counter.textContent = counterValue;
};
   

