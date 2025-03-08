
let imgFileName = "../imgs/diamond_gs1.jpg";
let threshold = 180;

  
var Module = {
    onRuntimeInitialized() {
        document.getElementById('status').innerHTML = '画像処理OK';
        threshold_binary(imgFileName,threshold);
    }
};