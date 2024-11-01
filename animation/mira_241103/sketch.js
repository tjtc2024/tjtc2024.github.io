
function setup(){
  createCanvas(700, 700, WEBGL);
  normalMaterial();
  //ortho(-500, 500, -500, 500, 0, 1500);
  perspective(PI / 3.0, 1.0, 0.1, 1000);
}

let t = 0;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // 上限は除き、下限は含む
}

let rmin = 0;
let rmax = 0;
function draw(){
  background(0);

  push();
  translate(0,0,100);
  fill(250,0,0);
  let r = getRandomInt(rmin,rmax);
  sphere(r);
  pop();
  if (t < 200) {

    rmin = (t < 50) ? 10 + t : (50 < t && t <= 100) ? 10 + (100-t) : 8;
    rmax = (t < 50) ? 20 + t : (50 < t && t <= 100) ? 20 + (100-t) : 10;
    t++;
  }
  else {
    t = 0;
  }


}
