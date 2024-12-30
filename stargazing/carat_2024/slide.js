
let button_play = document.getElementById('play');
let button_stop = document.getElementById('stop');

const images = document.querySelectorAll('img');
let number = 0;
let interval = 5000;

let play = true;

function changeImage() {
  if (play) {
    images[number].classList.remove('active');
    number = (number + 1) % images.length;
    images[number].classList.add('active');
  }
}

function playButton() { play = true; }
function stopButton() { play = false; }


button_play.addEventListener('click', playButton);
button_stop.addEventListener('click', stopButton);

setInterval(changeImage, interval);
