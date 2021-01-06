
function setup() {
  //canvas=createCanvas(w, h);
  fullscreen(true);
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255,255,128);
  fill(200, 200, 200);
  noStroke();
  fill(0);
  rect(0,0,windowWidth,windowHeight);
  textSize(20);
  fill(255);
  text(windowWidth,width/2,windowHeight/2);
  text(windowHeight,widnowWidth/2,windowHeight/2+30);
  //uses global variables for width and height
 }

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}