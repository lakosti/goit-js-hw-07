const userName = document.querySelector('#name-input');
const greet = document.querySelector('#name-output');

userName.addEventListener('input', onInput);

function onInput(evt) {
  greet.textContent = evt.target.value.trim() || 'Anonymous';
}
