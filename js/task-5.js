// const changeColorBtn = document.querySelector('button');
// const body = document.querySelector('body');
// const label = document.querySelector('.color');

// changeColorBtn.addEventListener('click', () => {
//   const currentColor = (body.style.backgroundColor = `#${Math.floor(
//     Math.random() * 16777215
//   )
//     .toString(16)
//     .padStart(6, 0)}`);
//   label.textContent = `${currentColor}`;
// });

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector('.change-color');
const body = document.querySelector('body');
const colorSpan = document.querySelector('.color');

changeColorBtn.addEventListener('click', () => {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorSpan.textContent = color;
});
