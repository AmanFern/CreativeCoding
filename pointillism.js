var img, x, y;

function preload() {

img = loadImage("when1.jpg");

}

function setup() {

createCanvas (564, 562);

background(0);

noStroke();

}

function draw() {

x = random(width);

y = random(height);

var c = img.get(x, y);

fill(c[0], c[1], c[2], 100);

rect (x, y, 30, 20);

}

