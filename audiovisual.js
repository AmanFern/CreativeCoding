let input; 
let colours = [ // colors for circle 
  "#3C5B6F",
  "#948979",
  "#ece5ce",
  "#DFD0B8"
]

function setup() {
	createCanvas(700, 700);
	background('#153448');
	input = new p5.AudioIn(); //input of audio
	input.start();
}

function draw() {
	
	let inputLevel = input.getLevel() * height * 4; // gets bigger when input volume increases
	fill(random(colours));
	rect(mouseX, mouseY, inputLevel); // rectangle appears on cursor
}
