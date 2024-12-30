let canvas = document.querySelector('#main');
let context = canvas.getContext('2d');

let abs_motion = true;
let auto = true;

let T1 = 24*60;
let T2 = 24*10*60;
let omega1 = 2*Math.PI / T1;
let omega2 = 2*Math.PI / T2;

let t1 = 0;
let t2 = 0;

let t = 0;
let T = 24*10*60;
let omega = 2*Math.PI / T;


const textbox1 = document.getElementById('horizen');
const textbox2 = document.getElementById('satellite');
const motion_req = document.getElementsByName('motion');


function horizen(x1,y1,x2,y2) {
    context.beginPath();
    context.linewidth=2;
    context.strokeStyle = "cyan";
    context.moveTo(canvas.width/2+x1,canvas.height/2-y1);
    context.lineTo(canvas.width/2+x2,canvas.height/2-y2);
    context.stroke();
}


function ball(r, x, y) {
    context.beginPath();
    context.fillStyle = 'silver';
    context.arc((canvas.width / 2 + x),(canvas.height / 2 - y),r,0,2*Math.PI,true);
    context.fill();
}

// 初期値
function motion() {
    // 現在の描画をクリアする
    context.clearRect(0, 0, canvas.width, canvas.height);

    ball(100, 0, 0);
    

    if (abs_motion) {
        let theta1 = omega1*t1;
        let p_x = 100 * Math.cos(theta1);
        let p_y = 100 * Math.sin(theta1);

        let a_x = p_x - 200 * Math.sin(theta1);
        let a_y = p_y + 200 * Math.cos(theta1);

        let b_x = p_x + 200 * Math.sin(theta1);
        let b_y = p_y - 200 * Math.cos(theta1);

        horizen(a_x,a_y,b_x,b_y);
        ball(5, 200 * Math.cos(omega2*t2), 200*Math.sin(omega2*t2));
        t1 = (t1 < T1) ? t1+1 : 0;
        t2 = (t2 < T2) ? t2+1 : 0;
    }
    else {
        horizen(100,200,100,-200);
        ball(5, 200 * Math.cos(omega*t), 200*Math.sin(omega*t));
        t = (t < T) ? t+1 : 0;
    }
}


function run() {
    auto = !auto;
}

function reset() {
    auto = false;
    abs_motion = motion_req.item(0).checked;
    let h1=textbox1.value;
    let h2=textbox2.value;

    T1raw=h1*24*60;
    T2raw=h2*24*60;

    if (abs_motion) {
        omega1=2*Math.PI/T1raw;
        omega2=2*Math.PI/T2raw;

        T1=Math.abs(h1*24*60);
        T2=Math.abs(h2*24*60);
    }
    else {
        omega=2*Math.PI/T2raw-2*Math.PI/T1raw;
        T = Math.abs(2.0*Math.PI/omega);
    }

    t1=0;
    t2=0;
    t=0;
}

function update(callback) { 
    if (auto) {
        motion();
    }
    window.requestAnimationFrame(update);
}

// updateの実行
window.requestAnimationFrame(update);