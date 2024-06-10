let gameState = 0; // 0: start screen, 1: game on, 2: end screen
let dropY = -50;
let dropX = 200;
let dropSpeed = 2;
let playerScore = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  switch(gameState) {
    case 0:
      showStartScreen();
      break;
    case 1:
      playGame();
      break;
    case 2:
      showEndScreen();
      break;
  }
}

function showStartScreen() {
  background(173, 216, 230); // Light blue background
  fill(0, 102, 153);
  textSize(32);
  textAlign(CENTER, CENTER);
  text('Catch the Falling Balls', width / 2, height / 2 - 20);
  textSize(16);
  text('Click to start the game', width / 2, height / 2 + 20);
  resetGame();
}

function playGame() {
  background(0); // Black background

  // Display score
  fill(255);
  textSize(18);
  text(`Score: ${playerScore}`, 50, 30);

  // Draw falling star
  fill(255, 223, 0); // Yellow color
  noStroke();
  ellipse(dropX, dropY, 30, 30); // Larger star

  // Draw catcher
  fill(0, 255, 127); // Spring green color
  rectMode(CENTER);
  rect(mouseX, height - 20, 80, 20); // Larger catcher

  // Move the star
  dropY += dropSpeed;

  // Check if star hits the bottom
  if (dropY > height) {
    gameState = 2; // Switch to end screen
  }

  // Check if star is caught
  if (dropY > height - 30 && dropX > mouseX - 40 && dropX < mouseX + 40) {
    dropY = -50;
    dropSpeed += 0.5;
    playerScore += 1;
    pickNewPosition();
  }
}

function pickNewPosition() {
  dropX = random(30, width - 30); // Avoid edge clipping
}

function showEndScreen() {
  background(178, 34, 34); // Firebrick color
  fill(255);
  textSize(32);
  textAlign(CENTER, CENTER);
  text('Game Over!', width / 2, height / 2 - 20);
  textSize(16);
  text(`Your score: ${playerScore}`, width / 2, height / 2 + 20);
  text('Click to play again', width / 2, height / 2 + 60);
}

function mousePressed() {
  if (gameState === 0 || gameState === 2) {
    gameState = 1; // Start or restart game
  }
}

function resetGame() {
  playerScore = 0;
  dropSpeed = 2;
  dropY = -50;
}
