// 絶対等級イメージ

let slider;
var w = 400;
var h = 700;

function setup() {
  createCanvas(w, h, WEBGL);
  
  slider = createSlider(100, 15000, 100);
  slider.position(20, 500);
  slider.size(80);
  
  normalMaterial();
  perspective(PI/2, w/h, 20, 15000);
  camera(0,0,0,0,0,1500,0,1,0);
  
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // 上限は除き、下限は含む
}


function draw() {
  background(0);
  // デネブ
  let gain = slider.value();
  let s_deneb = getRandomInt(200,250);
  let r_deneb = getRandomInt(200,250);
  push();
  fill(s_deneb, s_deneb, s_deneb);
  //circle(100,100,r_deneb);
  translate(20,10,gain);
  sphere(r_deneb);
  pop();

  // ベガ
  let s_vega = getRandomInt(200,250);
  let r_vega = getRandomInt(1,3);
  push();
  fill(s_vega, s_vega, s_vega);
  translate(-20,-10,70);
  sphere(r_vega);
  //circle(300,100,r_vega);
  pop();

  // アルタイル
  let s_altair = getRandomInt(170,230);
  let r_altair = getRandomInt(2,0)
  push();
  fill(s_altair, s_altair, s_altair);
  translate(-20,40,70);
  sphere(r_altair);
  //circle(300,400,r_altair);
  pop();
}
