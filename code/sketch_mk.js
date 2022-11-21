// https://editor.p5js.org/mkreier/sketches/q4H_ePlSI

let CANVAS_SIZE = 400;
let GRID_SQUARES = 10;
let STEP = CANVAS_SIZE/GRID_SQUARES;
let NUM_ROTATIONS = 8;
let NUM_OF_POINTS = 8;

var COLORS = [[23, 23, 56],[46, 23, 96],[52, 35, 166],[113, 128, 185],[223, 243, 228]]


function setupStandardAxes(showLines){
  push()
  translate(CANVAS_SIZE/2,CANVAS_SIZE/2)
  scale(1.0,-1.0)
}

function drawGridLines(){
  fill(0,0,255)
  circle(0,0,5)
  stroke(200)
  for(var i = -GRID_SQUARES;i<GRID_SQUARES;i++){
      line(i*STEP,-GRID_SQUARES/2*STEP,i*STEP,GRID_SQUARES/2*STEP)
  }
  for(var j = -GRID_SQUARES;j<GRID_SQUARES;j++){
      line(-GRID_SQUARES/2*STEP,j*STEP,GRID_SQUARES/2*STEP,j*STEP)
  }
}

function setup() {
  var canv = createCanvas(CANVAS_SIZE, CANVAS_SIZE);
  background(220);
  angleMode(DEGREES);
  setupStandardAxes();
  // drawGridLines()
  
  noStroke()
  for(var j = 0;j<NUM_OF_POINTS;j++){
    let randomX = random(0,GRID_SQUARES/3)
    let randomY = random(-GRID_SQUARES/4,GRID_SQUARES/2)
    let randomColor = random(COLORS)
    fill(randomColor);
    let circleSize = random(2,30)
    let num_of_rotations = random(5,30)
    for(var i = 0;i<num_of_rotations;i++){

    circle(randomX*STEP,randomY*STEP,circleSize)
      rotate(360/num_of_rotations);
    }
  }
  translate(-CANVAS_SIZE/4,CANVAS_SIZE/4)  
  
  for(var j = 0;j<NUM_OF_POINTS;j++){
    let randomX = random(0,GRID_SQUARES/3)
    let randomY = random(-GRID_SQUARES/4,GRID_SQUARES/2)
    let randomColor = random(COLORS)
    fill(randomColor);
    let circleSize = random(2,30)
    let num_of_rotations = random(5,30)
    for(var i = 0;i<num_of_rotations;i++){

    circle(randomX*STEP,randomY*STEP,circleSize)
      rotate(360/num_of_rotations);
    }
  }
}

function draw() {
  // nothing to do here - this will be repeated!  
}
