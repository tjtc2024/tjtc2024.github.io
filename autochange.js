
const images = document.querySelectorAll('img');
let number = 0;
 
function changeImage() {
  images[number].classList.remove('active');
  number = (number + 1) % images.length;
  images[number].classList.add('active');
}
 
setInterval(changeImage, 4000);
