let t = 0;
let num = 10;
let sZ;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //background(20);
}

function draw() {
  background(20);
  stroke(255);
  strokeWeight(5);
  translate(width/2, height/2);
  circle(0,0, 300);
  //draw faint fractal in bg
  //add some more planet orbits
  //increment/change central planet somehow- look at generative sketch

for (let i =0; i<num; i++){
  //line(x1(t+i),y1(t+i),x2(t+i),y2(t+i));
  // point(x1(t),y1(t));
  // point(x2(t),y2(t));
  sZ = map(x2(t), 0, width, 25, 100);
  circle(x1(t),y1(t),sZ);
  console.log(sZ);
}
  t+=0.1;

}

//big oval loop path
function x1(t){
  return sin(t/10) *(width/2);
}
function y1(t){
  return cos(t/10) *100;
}

function x2(t){
  return sin(t/10)*(width/3) + sin(t/5)*50;
}

function y2(t){
  return cos(t/20) *(height/3) + cos(t/5)*50;
}