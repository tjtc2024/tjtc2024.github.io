const div = document.getElementById('conv_json');

let idx = 0;
        
const loadHtml = (jsonObj) => {
    let msg = "<h3>"+ jsonObj.title + "</h3>";
    msg += "<p><img src=\"" + jsonObj.img + "\"></p>";
    div.innerHTML = msg;
}
        
const loadPromise =
    (url) => fetch(url)
            .then((response) => { return response.json(); })
            .then((result) => { loadHtml(result); })
            .catch((e) => {})
        
        
const pages = [
    "./q0.json",
    "./q1.json",
    "./q2.json",
    "./q3.json",
    "./q4.json",
    "./q5.json",
    "./q6.json",
    "./q7.json",
    "./q8.json"
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