
function setup(){
  createCanvas(400, 400, WEBGL);
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

function draw(){
  background(0);
  
  push();
  translate(50*Math.cos(2*PI*t/1000), 0, 100 - 50*Math.sin(2*PI*t/1000));
  fill(128,64,0);
  let rb = getRandomInt(18,20);
  sphere(rb);
  pop();

  push();
  translate(0,0,100);
  fill(100,100,250);
  let ra = getRandomInt(8,10);
  sphere(ra);
  pop();
  if (t < 1000) {
    t++;
  }
  else {
    t = 0;
  }


}
