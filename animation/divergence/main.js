// 核融合アニメーション制御

const w = 400;
const h = 300;
const r = 20;


let t = 0;


const lowBtn = document.getElementById("low");
const highBtn = document.getElementById("high");
const resetBtn = document.getAnimations("reset");

let start = false;


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