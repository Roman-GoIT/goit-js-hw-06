const text = document.querySelector('#text');
const fontSize = document.querySelector('#font-size-control');

fontSize.addEventListener('input', size);

function size(evt) {
    text.style.fontSize = evt.currentTarget.value + 'px';
}