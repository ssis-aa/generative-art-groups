function three_bars() {
  rect(180, -30, 10, 60);
  rect(200, -30, 10, 60);
  rect(220, -30, 10, 60);
}

function setup() {
  createCanvas(600, 400);
  background(240);
  noStroke();
  fill(255, 0, 0);
  circle(300, 200, 160);
  fill(0, 0, 255);
  arc(300, 200, 160, 160, 0, PI);
  circle(340, 200, 80);
  fill(255, 0, 0);
  circle(260, 200, 80);
  fill(0);
  translate(width / 2, height / 2);
  rotate(PI / 6);
  for (var i = 0; i < 2; i++) {
    three_bars();
    rotate(PI);
    three_bars();
    rotate(-PI / 3);
  }
}

function draw() {
  // background(220);
}
