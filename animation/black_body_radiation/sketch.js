
let slider;
var w = 600;
var h = 600;

function setup() {
  createCanvas(w, h);
  
  slider = createSlider(1, 4, 2);
  slider.position(20, 500);
  slider.size(80);
  background(0);
}


let t = 0;
let l = 2;
let lp = 2;

let cr = 128;
let cg = 128;
let cb = 255;

// 黒体輻射
function draw() {
  background(0,0,0);
  l = slider.value();

  if (l != lp) {t = 0;}


  if (t < 2000) {
    for (n = 0; n < 40; n++) {
      if (t > 100*n * 2/ l) {
        stroke(255,255,255);
        fill(0,0,0)
        circle(200,200, 6*(t-n*100 * 2/ l));
      }
    }
    t = t + 1;
  }
  else {
    t = 1000;
  }

  cr = 127 + 128 - 32*l;
  cb = 127 + 32*l;
  fill(cr,cg,cb);
  circle(200,200,20);

  lp = l;
}
