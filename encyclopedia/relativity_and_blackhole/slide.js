
const imgpage = document.getElementById("imgpage");

const pages = [
    "page0.png",
    "page1.png",
    "page2.png",
    "page3.png",
    "page4.png"
];


let idx = 0;
const nextPage = () => {
    idx = (idx < pages.length-1) ? idx+1 : 0;
    imgpage.innerHTML = "<img src=\"" + pages[idx] + "\">";
}

const prevPage = () => {
    idx = (idx > 0) ? idx-1 : pages.length-1;
    imgpage.innerHTML = "<img src=\"" + pages[idx] + "\">";
}


