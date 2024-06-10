function setup() {
               createCanvas(600, 600);
               background(100);
}


function mouseDragged () {
	
	let r = random(100, 255);
	let g = random(0, 50);
	let b = random(0, 255);
	
	
	fill (r, g, b);
	rect (mouseX, mouseY,100, 50);
}
