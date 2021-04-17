var backgroundImage;
var bgsprite;

function preload(){
 backgroundImage=loadImage("side view road.jpg");
  
 
}

function setup() {
  createCanvas(600, 200);
  bgsprite = createSprite(200,200);
 
}

function draw() {
  //trex.debug = true;
  background('blue');
 
 
  
  
  drawSprites();
}

