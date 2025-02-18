
let threshold = 145;
let imgElement = document.getElementById('imageSrc');


// 描画
function paint() {
  // 画像ロード
  let src = cv.imread(imgElement);
  let dst = new cv.Mat();
  cv.cvtColor(src,dst,cv.COLOR_RGB2GRAY,0);

  for (let y = 0; y < src.rows; y++) {
    for (let x = 0; x < src.cols; x++) {
      let c = dst.data[y * src.cols + x];
      dst.data[y * src.cols + x] = (c > threshold) ? Math.min(Math.trunc(512 * (c - threshold) / (255 - threshold)),255) : 0;
    }
  }


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
  threshold = 145;
  paint();
});

var Module = {
  onRuntimeInitialized() {
    document.getElementById('status').innerHTML = '画像処理OK';
    paint();
  }
};