
let threshold = 200;
let imgElement = document.getElementById('imageSrc');

// 描画
function paint() {
  // 画像ロード
  let src = cv.imread(imgElement);
  let dst = new cv.Mat();
  cv.cvtColor(src,src,cv.COLOR_RGB2GRAY,0);

  cv.threshold(src, dst, threshold, 255, cv.THRESH_BINARY);
  cv.imshow('canvasOutput', dst);

  src.delete();
  dst.delete();
}


// ボタンイベント
const downGainElement = document.getElementById('down');
downGainElement.addEventListener('click', () => {
  threshold = (threshold > 128) ? threshold-1 : 128;
  paint();
});

const upGainElement = document.getElementById('up');
upGainElement.addEventListener('click', () => {
  threshold = (threshold < 255) ? threshold+1 : 255;
  paint();
});

const resetElement = document.getElementById('reset');
resetElement.addEventListener('click', () => {
  threshold = 200;
  paint();
});

var Module = {
  onRuntimeInitialized() {
    document.getElementById('status').innerHTML = 'OpenCV.js is ready.';
    paint();
  }
};