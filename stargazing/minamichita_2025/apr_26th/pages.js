
const imgsrc = document.getElementById("imgsrc");
const title = document.getElementById("title");

const imgs = [
    "imgs/mw_sco2.jpg",
    "imgs/lib.jpg",
    "imgs/vir.jpg",
    "imgs/mw_cyg1.jpg",
    "imgs/mw_cyg2.jpg",
    "imgs/mw_sco6.jpg"
];

const titles = [
    "さそり座といて座付近の天の川",
    "てんびん座とスピカ,アンタレス",
    "おとめ座",
    "夏の大三角と天の川",
    "夏の大三角と天の川",
    "さそり座といて座付近の天の川"
];

let idx = 0;
const lastIdx = imgs.length - 1;
const showPage = (n) => {
    imgsrc.innerHTML = "<img src=\"" + imgs[n] + "\">";
    title.innerHTML = titles[n];    
};

const nextPage = () => {
    idx = (idx < lastIdx) ? idx+1 : 0;
    showPage(idx);
};

const prevPage = () => {
    idx = (idx > 0) ? idx-1 : lastIdx;
    showPage(idx);
};

const resetPage = () => {
    idx = 0;
    showPage(idx);
};
