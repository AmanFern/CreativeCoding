function preload() {
  img = loadImage('when1.jpg');
}

function setup() {
  createCanvas(500, 500);
  noLoop();
}

function draw() {
  background (67,20,25)
  // Create a mask
  let maskGraphics = createGraphics(800,600);
  maskGraphics.noStroke();
  maskGraphics.ellipse(400, 300, 500, 400);

  img.mask(maskGraphics);
  image(img, 0, 0);

  textAlign(CENTER, CENTER);
  fill(255, 255, 255, 230); 
  textSize(48);
  textFont('Georgia'); 
  text("Sunsets", width / 2.2, height / 2.2);
}
