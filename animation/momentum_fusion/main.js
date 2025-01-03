// 核融合アニメーション制御

const w = 400;
const h = 300;
const r = 20;

let v = 0;
let x = 0;
let t = 0;

const x1_init = r;
const x2_init = w-r;
let x1 = x1_init;
let x2 = x2_init;

const startBtn = document.getElementById("start");
const fusionBtn = document.getElementById("fusion");
const resetBtn = document.getAnimations("reset");

let start = false;
let enable = false;
let fusion = false;


function onClickStart() {
    v = 5;
    enable = false;
    fusion = false;
}

function onClickFusion() {
    v = 5;
    enable = true;
    fusion = false;
}

function reset() {
    v = 0;
    x1 = x1_init;
    x2 = x2_init;

    enable = false;
    fusion = false;
}

function onClickReset() {
    reset();
}