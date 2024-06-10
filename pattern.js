let palette = ['#488BC3', 'rgb(154,123,72)', 'rgb(239,208,182)'];
let randomIndex;

function setup() {
  createCanvas(400, 400);
  background(220); // Set background color
  frameRate(0.5) // Frame changes every 2 seconds
  noStroke(); // Remove outlines
}

function draw() {
  let stepSize = 100; // Size of each square

  for (let x = 0; x < width; x += stepSize) {
    for (let y = 0; y < height; y += stepSize) {
      randomIndex = floor(random(palette.length)); // Get random index for color
      fill(palette[randomIndex]); // Set fill color from palette
      rect(x, y, stepSize, stepSize); // Draw square
    }
  }
}
