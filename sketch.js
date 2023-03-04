let t = 0;
let num = 10;
let sZ, sZ2, sZ3;
let starNum = 50;
let canvas2;

function setup() {
  //colorMode(HSB);
  createCanvas(windowWidth, windowHeight);
  background(20);
}


function draw() {
//background(20);
noStroke();

  translate(width/2, height/2);
  fill (255);
  circle(0,0, 300);
  //draw faint fractal in bg
  //add pulsing/fading stars?
  //increment/change central planet somehow- look at generative sketch w/color somehow?

//for (let i =0; i<num; i++){
  sZ = map(x2(t), 0, width, 25, 100);
  sZ2 = map(x2(t),0, width, 75,200);
  sZ3 = map(x2(t),0, width, 10,75);
  fill(255);
  circle(x1(t),y1(t),sZ);
  fill(0,0,255);
  circle(x1(t*2), y1(t)+75, sZ2);
  fill(0,255,0);
  circle(x1(t/2)+50, y1(t)-100, sZ3);
//}
  t+=0.08;

beginShape();
for(let i = 0; i<200; i++){
stroke(255,0,0);
strokeWeight(5);
vertex(x2(t),y2(t));
}
endShape();
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
function stars(xS,yS){
  for(i = 0; i<starNum;i++){
    fill(255);
    circle(xS,yS,random(10));
  }
}