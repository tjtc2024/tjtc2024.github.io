
const slide = document.getElementById("slide");
let idx = 0;

const loadHtml = (jsonObj) => {
  let msg = "<h3>"+ jsonObj.title + "</h3>";
  msg += "<p><img src=\"" + jsonObj.img + "\"></p>";
  slide.innerHTML = msg;
}

const loadPromise =
    (url) => fetch(url)
        .then((response) => { return response.json(); })
        .then((result) => { loadHtml(result); })
        .catch((e) => {})


const pages = [
  "./master/ori.json",
  "./master/cyg.json",
  "./master/sco.json",
  "./master/and.json"
]

const initSlide = () => {
  idx = 0;
  const fileName = pages[idx];
  loadPromise(fileName);
}

const nextPage = () => {  
  idx++
  if (idx >= pages.length) {
    idx = 0;
  }
  const fileName = pages[idx];
  loadPromise(fileName);
}

initSlide();
setInterval(nextPage, 5000);