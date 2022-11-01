const cols = document.querySelectorAll('.col');

document.addEventListener('keydown', event => {
  console.log(event.code);
})

function generateRandomColor() {
  const hexCodes = '0123456789ABCDEF';
  let color = '';
  for (let i = 0; i < 6; i++) {
    color += hexCodes[Math.floor(Math.random() * hexCodes.length)]
  }
  return '#' + color;
}

function setRandomColors() {
  cols.forEach((col) => {
    const title = col.querySelector('.title');
    const button = col.querySelector('.button');
    const color = chroma.random();
    title.textContent = color;
    setTextColor(title, color);
    setTextColor(button, color);

    col.style.background = color;
  })
}

function setTextColor(text, color) {
  const luminance = chroma(color).luminance();
  text.style.color = luminance > 0.5 ? 'black' : 'white'
}

setRandomColors();