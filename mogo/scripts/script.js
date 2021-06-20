const carouselElements = document.querySelectorAll('.carousel-info');
const carouselText = document.querySelector('.main-heading');
const carouselHeaderButtons = document.querySelectorAll('.header-button');
const headerCarouselInfos = document.querySelectorAll('.carousel-info');
const carouselTextArr = [
  'WELCOME<br/>TO MOGO',
  'BEST<br/>SOLUTIONS',
  `ABOUT<br/>US`,
  'GET IN<br/> TOUCH',
];

let currentHeaderElement = 0;
let headerInterval = setInterval(runHeaderCarousel, 5000);

headerCarouselInfos.forEach((info, index) => {
  info.addEventListener('click', (evt) => {
    currentHeaderElement = index;
    headerRemoveActive();
    steps(index);
    resetHeaderInterval();
  });
});

function resetHeaderInterval() {
  clearInterval(headerInterval);
  headerInterval = setInterval(runHeaderCarousel, 5000);
}

function headerRemoveActive() {
  for (let i = 0; i < carouselElements.length; i++) {
    carouselElements[i].classList.remove('active');
    carouselText.classList.remove('active');
    carouselHeaderButtons[i].classList.remove('active');
  }
}

function headerSetActive(idx) {
  setTimeout(() => {
    steps(idx);
  }, 600);
}

function headerIndexUpdate() {
  currentHeaderElement++;
  if (currentHeaderElement > carouselElements.length - 1) {
    currentHeaderElement = 0;
  }
  return currentHeaderElement;
}

function runHeaderCarousel() {
  headerRemoveActive();
  headerSetActive(headerIndexUpdate());
}

function steps(idx) {
  carouselText.innerHTML = carouselTextArr[idx];
  carouselText.classList.add('active');
  carouselElements[idx].classList.add('active');
  carouselHeaderButtons[idx].classList.add('active');
}
