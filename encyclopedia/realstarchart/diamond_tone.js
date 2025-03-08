
let imgFileName = "../imgs/diamond_gs1.jpg";
let threshold = 145;

  
var Module = {
    onRuntimeInitialized() {
        document.getElementById('status').innerHTML = '画像処理OK';
        tonecurve(imgFileName,threshold);
    }
};