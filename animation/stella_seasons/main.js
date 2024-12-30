let canvas = document.querySelector('#main');
let context = canvas.getContext('2d');

let WIDTH = canvas.width;
let HEIGHT = canvas.height / 3;

let bg_1 = new Image();
bg_1.src="./stella.png";
bg_1.onload = function() {
    context.drawImage(bg_1,0,0,WIDTH,HEIGHT);
}

let bg_2 = new Image();
let bg_3 = new Image();

let rader = true;
let auto = true;

let t = 0;
let T = 12*30;
let omega = 2*Math.PI / T;
let phi_0 = -Math.PI * 23 / 24; 

const show_radar = document.getElementById('radar');


function direction(color, x1,y1,x2,y2) {
    context.beginPath();
    context.setLineDash([2,2]);
    context.linewidth=2;
    context.strokeStyle = color;
    context.moveTo(WIDTH/2+x1,HEIGHT/2-y1);
    context.lineTo(WIDTH/2+x2,HEIGHT/2-y2);
    context.stroke();
}

function radar(r, x, y) {
    context.beginPath();
    context.strokeStyle = 'white';
    context.arc((WIDTH/2 + x),(HEIGHT/2 - y),r,0,2*Math.PI,true);
    context.stroke();
}

function ball(color, r, x, y) {
    context.beginPath();
    context.fillStyle = color;
    context.arc((WIDTH/2 + x),(HEIGHT/2 - y),r,0,2*Math.PI,true);
    context.fill();
}

// 初期値
function motion() {
    // 現在の描画をクリアする
    context.drawImage(bg_1,0,0,WIDTH,HEIGHT);

    if (15 <= t && t < 30+15) {
        bg_2.src = "nagoya/01_jan.png";
        bg_3.src = "sydney/01_jan.png";
    }
    else if (30+15 <= t && t < 2*30+15) {
        bg_2.src = "nagoya/02_feb.png";
        bg_3.src = "sydney/02_feb.png";
    }
    else if (2*30+15 <= t && t < 3*30+15) {
        bg_2.src = "nagoya/03_mar.png";
        bg_3.src = "sydney/03_mar.png";
    }
    else if (3*30+15 <= t && t < 4*30+15) {
        bg_2.src = "nagoya/04_apr.png";
        bg_3.src = "sydney/04_apr.png";
    }
    else if (4*30 + 15 <= t && t < 5*30+15) {
        bg_2.src = "nagoya/05_may.png";
        bg_3.src = "sydney/05_may.png";
    }
    else if (5*30+15 <= t && t < 6*30+15) {
        bg_2.src = "nagoya/06_jun.png";
        bg_3.src = "sydney/06_jun.png";
    }
    else if (6*30+15 <= t && t < 7*30+15) {
        bg_2.src = "nagoya/07_jul.png";
        bg_3.src = "sydney/07_jul.png";
    }
    else if (7*30+15 <= t && t < 8*30+15) {
        bg_2.src = "nagoya/08_aug.png";
        bg_3.src = "sydney/08_aug.png";
    }
    else if (8*30+15 <= t && t < 9*30+15) {
        bg_2.src = "nagoya/09_sep.png";
        bg_3.src = "sydney/09_sep.png";
    }
    else if (9*30+15 <= t && t < 10*30+15) {
        bg_2.src = "nagoya/10_oct.png";
        bg_3.src = "sydney/10_oct.png";
    }
    else if (10*30+15 <= t && t < 11*30+15) {
        bg_2.src = "nagoya/11_nov.png";
        bg_3.src = "sydney/11_nov.png";
    }
    else {
        bg_2.src = "nagoya/12_dec.png";
        bg_3.src = "sydney/12_dec.png";
    }

    context.drawImage(bg_2,0,HEIGHT,WIDTH,HEIGHT);
    context.drawImage(bg_3,0,HEIGHT*2,WIDTH,HEIGHT);

    ball('yellow', 20, 0, 0);
    let theta = omega*t;
    let p_x = 50 * Math.cos(omega*t + phi_0);
    let p_y = 50 * Math.sin(omega*t + phi_0);

    let n_x = -50 * Math.sin(omega*t + phi_0);
    let n_y = 50 * Math.cos(omega*t + phi_0);
    
    if (show_radar.checked) {
        direction('white', p_x, p_y, 5*p_x, 5*p_y);
        direction('white', p_x, p_y, p_x - 4*n_x, p_y - 4*n_y);
        direction('white', p_x, p_y, p_x + 4*n_x, p_y + 4*n_y);
        radar(100,0,0);
        radar(150,0,0);
        radar(200,0,0);
        radar(250,0,0);
    }

    ball('blue', 10, p_x, p_y);
    t = (t < T) ? t+1 : 0;
}


function run() {
    auto = !auto;
}

function reset() {
    auto = false;
    t=0;
}

let delay = 5;
function update(callback) {
    if (auto) {
        delay--;
        if (delay <= 0) {
            motion();
            delay = 4;
        }
    }
    window.requestAnimationFrame(update);
}

// updateの実行
window.requestAnimationFrame(update);