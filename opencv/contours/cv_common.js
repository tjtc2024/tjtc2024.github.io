
// 輪郭描画
async function paint_contours(imgFileName) {
  let threshold = 145;
  // 画像ロード
  let img = new Image();
  img.src = imgFileName;
  await img.decode();
  let src = cv.imread(img);
  let dst = cv.Mat.zeros(src.rows, src.cols, cv.CV_8UC3);

  cv.cvtColor(src,src,cv.COLOR_RGB2GRAY,0);
  cv.threshold(src,src,160,200, cv.THRESH_BINARY);
  
  let contours = new cv.MatVector();
  let hierarchy = new cv.Mat();
  
  // You can try more different parameters
  cv.findContours(src, contours, hierarchy, cv.RETR_CCOMP, cv.CHAIN_APPROX_SIMPLE);
  // draw contours with random Scalar
  for (let i = 0; i < contours.size(); ++i) {
    let color = new cv.Scalar(Math.round(Math.random() * 255), Math.round(Math.random() * 255),
                              Math.round(Math.random() * 255));
    cv.drawContours(dst, contours, i, color, 1, cv.LINE_8, hierarchy, 100);
  }

  cv.imshow('canvasOutput', dst);
  src.delete(); dst.delete(); contours.delete(); hierarchy.delete();
}

// 描画
async function paint_tonecurve(imgFileName) {
    let threshold = 145;
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