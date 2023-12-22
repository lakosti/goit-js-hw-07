const controls = document.querySelector('#controls');
const btnCreate = controls.querySelector('[data-create]');
const btnDestroy = controls.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');
const inputElement = controls.querySelector('input');

btnCreate.addEventListener('click', () => {
  let n = inputElement.value;

  if (n < 1 || n > 100) {
    alert('Enter a number from 1 to 100 ');
    return;
  }

  inputElement.value = '';
  boxesContainer.textContent = '';

  let side = 30;
  for (let i = 1; i <= n; i += 1) {
    const square = document.createElement('div');
    square.style.width = `${side}px`;
    square.style.height = `${side}px`;
    side += 10;
    square.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(square);
  }
});

btnDestroy.addEventListener('click', () => {
  boxesContainer.innerHTML = '';
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
