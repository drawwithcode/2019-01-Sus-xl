function preload(){
// put preload code here
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);
  background(0, 0, 26);
  frameRate(120);
}

function draw() {


      push();
      translate(600, windowHeight / 2);
      rotate(140);
      noFill();
      stroke (lerpColor(
        color ('#F5B041'),
        color ('#2ECC71'),
        frameCount / windowWidth));
      line(200, 0, cos(frameCount * 5) * 200, sin(frameCount * 5) * 150);
      pop();

      push();
      translate(500, windowHeight / 2);
      rotate(50);
      noFill(100);
      stroke (lerpColor(
        color ('#F5B041'),
        color ('#2ECC71'),
        frameCount / windowWidth));
      line(200, 0, cos(frameCount * 5) * 200, sin(frameCount * 5) * 150);
      pop();


      push();
      translate(550, windowHeight / 2);
      rotate(90);
      noFill();
      stroke (lerpColor(
        color ('#1ABC9C'),
        color ('#2ECC71'),
        frameCount / 72));
      line(200, 0, cos(frameCount * 5) * 200, sin(frameCount * 5) * 200);
      pop();


      if (frameCount == 72) {
      noLoop();

      }
    }
