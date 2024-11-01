

// Viewing Volume
const WIDTH = 400;
const HEIGHT = 400;
const Z_MIN = 0.1;
const Z_MAX = 1000.0;


const DEPTH = 200;
const RADIUS = 75;        // 伴星の半径



function setup(){
  createCanvas(WIDTH, HEIGHT, WEBGL);
  normalMaterial();
  perspective(PI / 3.0, 1.0, Z_MIN, Z_MAX);
}


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // 上限は除き、下限は含む
}

let t = 0;
function draw(){
  background(0);
  
  push();
  translate(RADIUS*Math.cos(2*PI*t/1000), 0, DEPTH - RADIUS*Math.sin(2*PI*t/1000));
  fill(128,64,0);
  let rb = getRandomInt(7,9);
  sphere(rb);
  pop();

  push();
  translate(0,0,DEPTH);
  fill(100,100,250);
  let ra = getRandomInt(10,12);
  sphere(ra);
  pop();
  if (t < 1000) {
    t++;
  }
  else {
    t = 0;
  }
}
