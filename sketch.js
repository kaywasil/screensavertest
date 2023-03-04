let t = 0;
let num = 10;
//let x1, x2, y1, y2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(20);
}

function draw() {
 // background(20);
  stroke(255);
  strokeWeight(5);


  // x1= sin(t/10)*100+sin(t/5)*20;
  // y1 = cos(t/10)*100;
  // x2 = sin(t/10)*200+sin(t)*2;
  // y2 = cos(t/20)*200 +cos(t/12)*20;

  translate(width/2, height/2);

for (let i =0; i<num; i++){
  //line(x1(t+i),y1(t+i),x2(t+i),y2(t+i));
  point(x1(t),y1(t));
  point(x2(t),y2(t));
}
  t+=0.05;

}

function x1(t){
  return sin(t/10) *100 + sin(t/5)*20;
}

function y1(t){
  return cos(t/10) *100;
}

function x2(t){
  return sin(t/10)*200+sin(t)*2;
}

function y2(t){
  return cos(t/20) *200 + cos(t/12)*20;
}