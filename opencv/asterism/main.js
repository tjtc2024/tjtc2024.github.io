
let threshold = 200;
let imgElement = document.getElementById('imageSrc');

// 描画
function paint() {
  // 画像ロード
  let src = cv.imread(imgElement);
  //let dst = src.clone();
  cv.cvtColor(src,src,cv.COLOR_RGB2GRAY,0);

  cv.threshold(src, src, threshold, 255, cv.THRESH_BINARY);
 

  let contours = new cv.MatVector();
  let hierarchy = new cv.Mat();
  //cv.findContours(src, contours, hierarchy, cv.RETR_CCOMP, cv.CHAIN_APPROX_SIMPLE);
  cv.findContours(src, contours, hierarchy, cv.RETR_TREE, cv.CHAIN_APPROX_NONE);

  let bg = new cv.Scalar(0,0,0);
  let dst = new cv.Mat(src.rows,src.cols,cv.CV_8UC3,bg);
  let color = new cv.Scalar(255,255,255);
  for (let n = 0; n < contours.size(); n++) {
    let cnt = contours.get(n);
    let rect = cv.boundingRect(cnt);
    let center = new cv.Point(rect.x + rect.width / 2, rect.y + rect.height / 2);
    let r = (rect.width+rect.height)/4;
    cv.circle(dst, center, r, color, cv.FILLED);
  }

  cv.imshow('canvasOutput', dst);
  // You can try more different parameters
  // let Moments = cv.moments(cnt, false);
  // momentsOutput.innerHTML = Moments.m00;

  // delete Mat object
  src.delete();
  dst.delete();
  contours.delete();
  hierarchy.delete();
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