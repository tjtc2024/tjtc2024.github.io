let imgFileName = "./imgs/cyg_gs1.jpg";

  
var Module = {
    onRuntimeInitialized() {
        document.getElementById('status').innerHTML = '画像処理OK';
        paint(imgFileName);
    }
};