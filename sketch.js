
var w = window.innerWidth;
var h = window.innerHeight;  
let canvas;

function setup() {
  //canvas=createCanvas(w, h);
  fullscreen();
}

function draw() {
  background(255,255,128);
  // A rectangle
  fill(200, 200, 200);
  noStroke();
  textSize(100);
  text("A",width/2,height/2);
  rect(20, 20, w-40, h-40);
  // uses global variables for width and height
  }

window.onresize = function() {
  // assigns new values for width and height variables
  w = window.innerWidth;
  h = window.innerHeight;  
  canvas.size(w,h);
}