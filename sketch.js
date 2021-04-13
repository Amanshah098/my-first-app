var posX=200
var posY=200
function setup() {

  
  createCanvas(400, 400);
  
}

function draw() {
 background("blue") 
 fill("red")
  rect(0,150,10,100);
  fill("yellow")
  rect(390,mouseY,10,100);
  fill("green")
  posX=posX+3
  posY=posY+3
  rect(posX,posY,10,10);
  
  
  
}
