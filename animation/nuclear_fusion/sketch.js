// 核融合反応アニメーション

let slider;
let button;
var w = 400;
var h = 300;

let x = 0;
let t = 0;
let v = 0;
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
  createCanvas(w, h);
  
  slider = createSlider(1, 10, 1);
  slider.position(10, 10);

  buttonStart = createButton('Start');
  buttonStart.position(150,10)
  buttonStart.mousePressed(initParam);

  buttonStop = createButton('Stop');
  buttonStop.position(200,10);
  buttonStop.mousePressed(clearParam);

  background(0);
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // 上限は除き、下限は含む
}


let x1 = 10;
let x2 = 390;

function lowspeed(v) {
  x1 += v * t/50;
  x2 += -v * t/50;

  if (x1 + 20 >= x2) {
    v = -2.0*v;
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
    x2 += 5 * t/20;
    fill(255,255,128);
    circle(x1,200,5);
    fill(128,255,255);
    circle(x2,200,15);
  }

  if (x1 + 10 >= x2) {
    fusion = true
  }
}

function draw() {
  background(0);

  let v = slider.value();
  
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

