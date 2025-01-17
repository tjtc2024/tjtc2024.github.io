// ロケット打ち上げアニメーション
const w = 400;
const h = 500;
const r = 5;

const y_buttom0 = 200;
const y_air0 = 400 - r;
let n = 0;
let v = -5;
let y_air = y_air0; // 空気分子の中心
let y_buttom = y_buttom0;   // ロケットの底

let trigger = false;
let upper = false;

function initParam() {
  trigger = true;
  y_buttom = y_buttom0;
  y_air = y_air0;
  upper = false;
  t = 0;
  n = 0;
}

function clearParam() {
  trigger = false;
  y_buttom = y_buttom0;
  y_air = y_air0;
  upper = false;
  t = 0;
  n = 0;
}

function setup() {
  const canvas = createCanvas(w, h);
  canvas.parent('canvasForHTML');

  const buttonStart = createButton('Start');
  buttonStart.position(10,50);
  buttonStart.mousePressed(initParam);

  const buttonReset = createButton('Reset');
  buttonReset.position(10,100);
  buttonReset.mousePressed(clearParam);

  background(0);
}


function air(x,y,r) {
  fill(200,200,200);
  circle(x,y,r);
}


function rocketBody(y_buttom) {
  const rocketHeight = 50;
  if (y_buttom >= 50) {
    fill(255,255,255);
    rect(50,y_buttom-50,300,rocketHeight);
    rect(50,y_buttom-10,50,210);
    rect(300,y_buttom-10,50,210);
  }
}

function ground(y_ground) {
  fill(255,255,255);
  rect(0,y_ground,w,100);
}


function draw() {
  background(0);
  
  y_buttom = (upper) ? y_buttom - 5 : 200;
  rocketBody(y_buttom);
  if (trigger) {
    if (v > 0) {
      if (y_air > y_buttom+5) {
        y_air -= v;
      }
      else {
        v = -v;
        y_air -= v;
        if (n >= 10) {
          upper = true;
        }
      }
    }
    else {
      if (y_air < y_air0) {
        y_air -= v;
      }
      else {
        n++;
        v = -v;
        y_air -= v;
      }
    }
  }

  let y_air1 = y_air;
  let y_air2 = (n < 10) ? y_air0 : y_air;
  let y_air3 = (n < 5) ? y_air0 : y_air;
  let y_air4 = (n < 10) ? y_air0 : y_air;
  for (let idx = 0; idx < 4; idx++) {
    air(120+idx*40, y_air1, 10);
    air(130+idx*40, y_air2, 10);
    air(140+idx*40, y_air3, 10);
    air(150+idx*40, y_air4, 10);
  }

  ground(400);
}

