// 核融合反応アニメーション

function setup() {
  const canvas = createCanvas(w, h);
  canvas.parent('canvasForHTML');

  background(0);
}


function lowspeed(v) {
  x1 += v;
  x2 += -v;

  if (x1 + r >= x2 - r) {
    v = -v;
  }

  fill(128,128,255);
  circle(x1,100,r);
  circle(x2,100,r);

  circle(x1,200,r);
  circle(x2,200,r);

}

function highspeed(v) {
  if (!fusion) {
    x1 += v;
    x2 += -v;
    fill(128,128,255);
    circle(x1,100,r);
    circle(x2,100,r);
    circle(x1,200,r);
    circle(x2,200,r);
  } else {
    x1 += -10;
    x2 += 1;
    fill(255,255,128);
    circle(x1,100,5);
    circle(x1,200,5);

    fill(255,255,255);
    circle(x2,100,25);
    circle(x2,200,25);
  }

  if (x1 + r >= x2 - r) {
    fusion = true
  }
}

// アニメーション
function draw() {
  background(0);
  
  if (!enable) {
    lowspeed(v);
  }
  else {
    highspeed(v);
  }
}

