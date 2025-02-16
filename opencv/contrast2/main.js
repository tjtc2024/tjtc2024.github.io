
let gain = 2.0;
let offset = -20.0;
let imgElement = document.getElementById('imageSrc');

function paint() {
  let src = cv.imread(imgElement);
  let dst = new cv.Mat();

  cv.addWeighted(src, gain, src, 0, offset, dst);

  cv.imshow('canvasOutput', dst);
  src.delete();
  dst.delete();
}

//imgElement.onload = function() { paint(); };

const downGainElement = document.getElementById('downGain');
downGainElement.addEventListener('click', () => {
  gain = (gain > 1.1) ? gain - 0.1 : 1.0;
  paint();
});

const upGainElement = document.getElementById('upGain');
upGainElement.addEventListener('click', () => {
  gain = (gain < 50.0) ? gain + 0.1 : 50.0;
  paint();
});

const downOffsetElement = document.getElementById('downOffset');
downOffsetElement.addEventListener('click', () => {
  offset = offset - 10.0;
  paint();
});

const upOffsetElement = document.getElementById('upOffset');
upOffsetElement.addEventListener('click', () => {
  offset = offset + 10.0;
  paint();
});

const resetElement = document.getElementById('reset');
resetElement.addEventListener('click', () => {
  gain = 2.0;
  offset = -20.0;
  paint();
});

var Module = {
  onRuntimeInitialized() {
    document.getElementById('status').innerHTML = 'OpenCV.js is ready.';
    paint();
  }
};