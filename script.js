const ballContainer = document.querySelector('#ball-container');
const textRGB = document.querySelector('#rgb-color');
const textAnswer = document.querySelector('#answer');

function randomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `( ${red} , ${green} , ${blue})`;
}

function getTextColor() {
  const ball = document.querySelectorAll('.ball');
  const ballNumber = Math.floor(Math.random() * 6);
  textRGB.innerText = `${ball[ballNumber].id}`;
}

function addBall() {
  for (let i = 0; i < 6; i += 1) {
    const ball = document.createElement('div');
    ball.classList = 'ball';
    ball.id = randomColor();
    ball.style.backgroundColor = `rgb${ball.id}`;
    ballContainer.appendChild(ball);
  }
  getTextColor();
}

ballContainer.addEventListener('click', (orign) => {
  if (orign.target.id === textRGB.innerText) textAnswer.innerText = 'Acertou!';
  else textAnswer.innerText = 'Errou! Tente novamente!';
});

window.addEventListener('load', addBall);
