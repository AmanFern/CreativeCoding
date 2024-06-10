function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  //body of the car 
  // rect ( x, y, width, height)
  fill ( 204, 153, 255);
  rect(50, 200, 300, 50);
  rect ( 150, 175, 20, 25);
  
   fill (100);
  ellipse ( 100, 250, 50, 50);
  ellipse ( 300, 250, 50, 50);
  // wheels 
  fill (255);
  // ellipse ( x, y, width, height)
  ellipse ( 100, 250, 35, 35);
  ellipse ( 300, 250, 35, 35);
 
  
  fill (192);
  ellipse ( 100, 250, 20, 20);
  ellipse ( 300, 250, 20, 20);
  
  // roof 
  // triangle ( x1, y1, x2, y2, x3, y3 )
  fill(255);
  triangle ( 200, 200, 225, 150, 300, 200);
  
  // headlights
  fill ( 255, 255, 204);
  ellipse ( 50, 210, 20, 20);
  ellipse ( 345, 210, 25, 20);
  
  //taillights
  fill ( 204, 153, 255);
  rect ( 35, 235, 15, 10);
  
  
}
