// 核融合反応アニメーション


const w = 400;
const h = 300;
const r = 10;

let slider;

let v = 0;
let x = 0;
let t = 0;

let run = false;
let fusion = false;

function initParam() {
  v = slider.value();
  run = true;
  fusion = false;
  x1 = 10;
  x2 = 390;
  t = 0;
}

function clearParam() {
  run = false;
  fusion = false;
  x1 = 10;
  x2 = 390;
  t = 0;
}

function setup() {
  const canvas = createCanvas(w, h);
  canvas.parent('canvasForHTML');
  
  slider = createSlider(1, 10, 1);
  slider.position(10, 50);

  const buttonStart = createButton('Start');
  buttonStart.position(150,50)
  buttonStart.mousePressed(initParam);

  const buttonStop = createButton('Stop');
  buttonStop.position(200,50);
  buttonStop.mousePressed(clearParam);

  background(0);
}

let x1 = 10;
let x2 = 390;

function lowspeed(v) {
  x1 += v * t/50;
  x2 += -v * t/50;

  if (x1 + r >= x2 - r) {
    v = -1.0*v;
  }

  fill(128,128,255);
  circle(x1,200,10);
  fill(128,128,255);
  circle(x2,200,10);
}

function highspeed(v) {
  if (!fusion) {
    x1 += v * t/20;
    x2 += -v * t/20;
    fill(128,128,255);
    circle(x1,200,10);
    fill(128,128,255);
    circle(x2,200,10);
  } else {
    x1 += -10 * t/20
    x2 += 1 * t/20;
    fill(255,255,128);
    circle(x1,200,5);
    fill(128,255,255);
    circle(x2,200,15);
  }

  if (x1 + r >= x2) {
    fusion = true
  }
}

function draw() {
  background(0);
  
  if (v <= 5) {
    lowspeed(v);
  }
  else {
    highspeed(v);
  }

  if (run) {
    if (t < 100) {
      t++;
    }
    else {
      run = false;
    }
  }
}

