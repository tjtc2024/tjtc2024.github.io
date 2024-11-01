// 絶対等級イメージ

let slider;
var w = 1200;
var h = 1200;

function setup() {
  createCanvas(w, h);
  
  slider = createSlider(0, 10, 0);
  slider.position(500, 100);
  slider.size(80);
  background(0);
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
  let s_deneb = getRandomInt(150,200) * (1 + gain/2);
  let r_deneb = getRandomInt(30,40) * (1 + gain/2);
  fill(s_deneb);
  circle(800,200,r_deneb);

  // ベガ
  let s_vega = getRandomInt(200,250);
  let r_vega = getRandomInt(45,50)
  fill(s_vega);
  circle(800,600,r_vega);

  // アルタイル
  let s_altair = getRandomInt(170,230);
  let r_altair = getRandomInt(35,40)
  fill(s_altair);
  circle(100,580,r_altair);
}
