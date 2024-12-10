const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

let gameInterval = null;
let gameOver = false;
let score = 0;
let snake = [{ x: 10, y: 10 }];
let food = null;
let dx = 1;
let dy = 0;
const gridSize = 20;
const menu = document.getElementById('menu');
const difficultyMenu = document.getElementById('difficulty');
const gameOverMenu = document.getElementById('gameOverMenu');
const finalScore = document.getElementById('finalScore');

document.getElementById('startButton').addEventListener('click', () => {
  menu.style.display = 'none';
  difficultyMenu.style.display = 'block';
});

document.getElementById('menuButton').addEventListener('click', () => {
  resetGame();
  showMenu();
});

document.getElementById('menuButtonGameOver').addEventListener('click', () => {
  resetGame();
  showMenu();
});

document.querySelectorAll('.difficulty-btn').forEach(button => {
  button.addEventListener('click', (e) => {
    const speed = parseInt(e.target.getAttribute('data-speed'));
    difficultyMenu.style.display = 'none';
    canvas.style.display = 'block';
    startGame(speed);
  });
});

document.getElementById('restartButton').addEventListener('click', () => {
  resetGame();
  gameOverMenu.style.display = 'none';
  canvas.style.display = 'block';
  startGame(100); 
});


function startGame(speed) {
  generateFood();
  gameInterval = setInterval(update, speed);
}

function resetGame() {
  gameOver = false;
  score = 0;
  snake = [{ x: 10, y: 10 }];
  dx = 1;
  dy = 0;
  clearInterval(gameInterval);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function showMenu() {
  canvas.style.display = 'none';
  gameOverMenu.style.display = 'none';
  menu.style.display = 'block';
}

function update() {
  if (gameOver) return;

  const head = { x: snake[0].x + dx, y: snake[0].y + dy };

  if (head.x < 0 || head.x >= canvas.width / gridSize || head.y < 0 || head.y >= canvas.height / gridSize || isCollision(head.x, head.y)) {
    gameOver = true;
    clearInterval(gameInterval);
    finalScore.textContent = score;
    canvas.style.display = 'none';
    gameOverMenu.style.display = 'block';
    return;
  }

  if (head.x === food.x && head.y === food.y) {
    score++;
    generateFood();
  } else {
    snake.pop();
  }

  snake.unshift(head);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBackground();
  drawSnake();
  drawFood();
  
}
function drawSnake() {
  ctx.fillStyle = '#0077ff';
  ctx.strokeStyle = '#005bb5';
  snake.forEach(part => {
    ctx.beginPath();
    ctx.roundRect(part.x * gridSize, part.y * gridSize, gridSize, gridSize, 5);
    ctx.fill();
    ctx.stroke();
  });
}

function drawFood() {
  if (food) {
    ctx.fillStyle = '#ff3333';
    ctx.beginPath();
    ctx.arc(
      food.x * gridSize + gridSize / 2,
      food.y * gridSize + gridSize / 2,
      gridSize / 2.5,
      0,
      Math.PI * 2
    );
    ctx.fill();
  }
}


function generateFood() {
  do {
    food = {
      x: Math.floor(Math.random() * (canvas.width / gridSize)),
      y: Math.floor(Math.random() * (canvas.height / gridSize)),
    };
  } while (isCollision(food.x, food.y));
}

function drawBackground() {
  const lightGreen = '#a8e063'; 
  const darkGreen = '#56ab2f';  

  for (let y = 0; y < canvas.height / gridSize; y++) {
    for (let x = 0; x < canvas.width / gridSize; x++) {
      ctx.fillStyle = (x + y) % 2 === 0 ? lightGreen : darkGreen;
      ctx.fillRect(x * gridSize, y * gridSize, gridSize, gridSize);
    }
  }
}



function isCollision(x, y) {
  return snake.some(part => part.x === x && part.y === y);
}


document.addEventListener('keydown', function (event) {
  const LEFT = 37, UP = 38, RIGHT = 39, DOWN = 40;

  switch (event.keyCode) {
    case LEFT: if (dx !== 1) { dx = -1; dy = 0; } break;
    case UP: if (dy !== 1) { dx = 0; dy = -1; } break;
    case RIGHT: if (dx !== -1) { dx = 1; dy = 0; } break;
    case DOWN: if (dy !== -1) { dx = 0; dy = 1; } break;
  }
});
