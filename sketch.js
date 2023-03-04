let t = 0;
let sZ, sZ2, sZ3;
let starNum = 50;
let canvas2;
let stars = [];
let g1,g2;

function setup() {
  colorMode(HSB, 360,100,100);
  createCanvas(windowWidth, windowHeight);
  //canvas2 = createGraphics(windowWidth, windowHeight);
  //canvas2.clear;
  //canvas2.background(50,50,50);
  //create stars equal to star num and put them in stars array
for(let i = 0; i< starNum; i++){
  let s = new Star(random(width), random(height), random(10));
  stars.push(s);
  }
}


function draw() {
background(20);
g1 = color(249,88,9);
g2 = color(285,100,18);
setGradient(0,0,width,height,g1,g2);

noStroke();

for (let star of stars){
  star.art();
}
push();
  translate(width/2, height/2);
  let sunHue = map(sin(t/5),-1,1,24,48)
  fill(sunHue, 60,90);
  let r2 = map(sin(t/5),-1,1,300,315)
  circle(0,0,r2);

  sZ = map(x2(t), 0, width, 25, 100);
  sZ2 = map(x2(t),0, width, 75,200);
  sZ3 = map(x2(t),0, width, 10,75);
  fill(246,50,90);
  circle(x1(t),y1(t),sZ);
  let p1Hue = map(sin(t/2),-1,1,335,359);
  fill(p1Hue,60,90);
  circle(x1(t*2), y1(t)+75, sZ2);
  fill(160,60,90);
  circle(x1(t/2)+50, y1(t)-100, sZ3);
  t+=0.06;
pop();
  // // //this element is stopping movement for some reason
  // for(let z = 0; z<stars.length; z++){
  //   stars[i].art();
  // }

//canvas2.beginShape();
//for(let i = 0; i<200; i++){
//   push()
// //canvas2.translate(-50,-50);
// canvas2.stroke(255,0,0);
// canvas2.strokeWeight(5);
// canvas2.point(x2(t),y2(t));
// image(canvas2,0,0);
// pop();
//}
//canvas2.endShape();
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

function setGradient(x, y, w, h, g1, g2) {
  noFill();
 for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(g1, g2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  }
class Star {
  constructor (x,y,d){
    this.x = x;
    this.y = y;
    this.d = d;
  }

  art(){
  noStroke();
  fill(170);
  //creates pulsing animation w/the stars
  let r = map(sin(t/3),-1,1,1,this.d)
  circle(this.x,this.y,r);
  }

}