

// トーンカーブ補正
async function tonecurve(imgFileName, threshold) {
    // 画像ロード
    let img = new Image();
    img.src = imgFileName;
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

// 二値分類
async function threshold_binary(imgFileName, threshold) {
    // 画像ロード
    let img = new Image();
    img.src = imgFileName;
    await img.decode();
    let src = cv.imread(img);
    let dst = new cv.Mat();
    cv.cvtColor(src,dst,cv.COLOR_RGB2GRAY,0);

    cv.threshold(dst, dst, threshold, 255, cv.THRESH_BINARY);
    cv.imshow('canvasOutput', dst);
  
    img.delete();
    src.delete();
    dst.delete();
}
