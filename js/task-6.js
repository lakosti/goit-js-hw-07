const input = document.querySelector('input');
const boxes = document.querySelector('#boxes');

const controls = document.querySelector('#controls');
const quantityDiv = controls.querySelector('input');

const btnCreate = controls.querySelector('[data-create]');
const btnDestroy = controls.querySelector('[data-destroy]');
const commonDiv = document.querySelector('#boxes');

btnCreate.addEventListener('click', () => {
  let n = quantityDiv.value;
  console.log(n);

  let side = 30;
  for (let i = 1; i <= n; i += 1) {
    const square = document.createElement('div');
    square.style.width += `${side}px`;
    square.style.height += `${side}px`;
    side += 10;
    commonDiv.appendChild(square);
    boxes.style.backgroundColor = '#f6f6fe';
    square.style.backgroundColor = getRandomHexColor();
  }
});

btnDestroy.addEventListener('click', () => {
  commonDiv.innerHTML = '';
  boxes.style.backgroundColor = 'transparent';
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
