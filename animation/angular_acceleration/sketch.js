// 金星と地球
const w = 400;
const h = 500;


const r_e = 5.0;
const omega_e = 2.0 * Math.PI / 365.0;
const r_v = 4.0;
const omega_v = 2.0 * Math.PI / 225.0;

let t_e = 0;
const theta_e_abs = () => {
  if (t_e < 360) {
    t_e += 5;
  }
  else {
    t_e = 0
  }

  return omega_e * t_e;
}

let t_v = 0;
const theta_v_abs = () => {
  if (t_v < 220) {
    t_v += 5;
  }
  else {
    t_v = 0;
  }

  return omega_v * t_v;
}

let theta_e = 0.0;
let theta_v = 0.0;


const moveAbsolute = () => {
  theta_e = theta_e_abs();
  theta_v = theta_v_abs();
}

const moveRelative = () => {
  theta_e = 0.0;
  theta_v = theta_v_abs() - theta_e_abs();
}

function setup() {
  const canvas = createCanvas(w, h);
  canvas.parent('canvasForHTML');

  const buttonStart = createButton('宇宙から見た地球と金星');
  buttonStart.position(10,50);
  buttonStart.mousePressed(moveAbsolute);

  const buttonReset = createButton('地球から見た金星');
  buttonReset.position(10,100);
  buttonReset.mousePressed(moveRelative);

  background(0);
}

const planet = (red,green,blue,x,y,r) => {
  fill(red,green,blue);
  circle(x,y,r);
}


function draw() {
  background(0);

  const y_e = 100 * Math.cos(theta_e) + 200;
  const x_e = 100 * Math.sin(theta_e) + 200;

  const y_v = 80 * Math.cos(theta_v) + 200;
  const x_v = 80 * Math.sin(theta_v) + 200;

  fill(255,128,128);
  circle(200,200,50);
  planet(128,128,255,x_e,y_e,10);
  planet(128,128,0,x_v,y_v,8);
}

