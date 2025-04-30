
const imgpage = document.getElementById("imgpage");

let idx = 0;
const nextPage = () => {
    idx = (idx < 9) ? idx+1 : 0;
    imgpage.innerHTML = "<img src=\"page" + idx.toString() + ".png\">";
}

const prevPage = () => {
    idx = (idx > 0) ? idx-1 : 9;
    imgpage.innerHTML = "<img src=\"page" + idx.toString() + ".png\">";
}


