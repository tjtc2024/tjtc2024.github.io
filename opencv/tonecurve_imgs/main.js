

let imgElement = document.getElementById('imageSrc');

let pos = 0;
let pics = Array("./imgs/diamond_gs1.jpg", "./imgs/leo_gs1.jpg", "./imgs/uma_gs1.jpg", "./imgs/vir_gs1.jpg", "./imgs/cyg_gs1.jpg", "./imgs/sco_gs1.jpg");
let thrs = Array(145,145,145,145,128,128);

// 描画
async function paint(imgfile) {
  let threshold = thrs[pos];
  // 画像ロード
  let img = new Image();
  img.src = imgfile;
  await img.decode();
  let src = cv.imread(img);
  let dst = new cv.Mat();
  cv.cvtColor(src,dst,cv.COLOR_RGB2GRAY,0);

  for (let y = 0; y < src.rows; y++) {
    for (let x = 0; x < src.cols; x++) {
      let c = dst.data[y * src.cols + x];
      dst.data[y * src.cols + x] = (c > threshold) ? Math.min(Math.trunc(512 * (c - threshold) / (255 - threshold)),255) : 0;
    }
  }


  
  cv.imshow('canvasOutput', dst);

  img.delete();
  src.delete();
  dst.delete();
}


// ボタンイベント
const nextImage = () => {
    if (pos < pics.length - 1) {
      pos++;
    }
    else {
      pos = 0;
    }

    imgElement.src = pics[pos];
    paint(pics[pos]);
}

var Module = {
  onRuntimeInitialized() {
    document.getElementById('status').innerHTML = '画像処理OK';
    paint(pics[pos]);
  }
};