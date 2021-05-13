let bgr = [
  'img/castle1.jpg',
  'img/castle2.jpg',
  'img/castle3.jpg',
  'img/castle4.jpg',
  'img/castle5.jpg',
  'img/castle6.jpg',
];
let cardContainer = document.querySelector('.card-container');
const gameOverComp = document.querySelector('.game-over');

function cardClicked(e) {
  if (gameOver) {
    return;
  }
  let clicked = e.target.parentNode;
  if (openedCards.length === 0 && !clicked.classList.contains('flipped')) {
    clicked.classList.add('flipped');
    openedCards.push(clicked);
  } else if (
    openedCards.length === 1 &&
    clicked !== openedCards[0] &&
    !clicked.classList.contains('flipped')
  ) {
    setCursor(false);
    clicked.classList.add('flipped');
    openedCards.push(clicked);
    compareCards(...openedCards);
  }
}
function setCursor(flag = false) {
  let arr = Array.from(cardContainer.children);
  if (flag) {
    arr.forEach((el) => (el.style.cursor = 'pointer'));
    return;
  }
  arr.forEach((el) => (el.style.cursor = 'not-allowed'));
}
cardContainer.addEventListener('click', cardClicked);

cardContainer.addEventListener('touchstart', cardClicked, { passive: true });

function compareCards(card1, card2) {
  let id1 = card1.getAttribute('data-id');
  let id2 = card2.getAttribute('data-id');

  if (id1 === id2) {
    filterCards(id1);

    setTimeout(() => {
      checkGameOver();
    }, 500);

    setTimeout(() => {
      openedCards = [];
      setCursor(true);
    }, 1000);
  } else {
    setTimeout(() => {
      openedCards.forEach((card) => card.classList.remove('flipped'));
      openedCards = [];
      setCursor(true);
    }, 1000);
  }
}
let gameOver = false;
let allCards = [];
let openedCards = [];

function filterCards(id) {
  allCards = allCards.filter((card) => card.getAttribute('data-id') !== id);
}

function checkGameOver() {
  if (allCards.length === 0) {
    gameOver = true;
    gameOverComp.style.display = 'block';
  }
}

function randomizeCards() {
  allCards.sort((a, b) => Math.random() - Math.random());
  allCards.forEach((card) => cardContainer.append(card));
}

function generateCard(id) {
  let src = bgr[id];
  const card = document.createElement('div');
  card.setAttribute('data-id', id);
  card.classList.add('card');
  const front = document.createElement('div');
  front.classList.add('card-front');
  const back = document.createElement('div');
  back.style.backgroundImage = `url(${src})`;
  back.style.backgroundPosition = 'cover';
  back.style.backgroundRepeat = 'no-repeat';
  back.classList.add('card-back');
  const backContent = document.createElement('p');
  //   backContent.textContent = id;
  back.append(backContent);
  card.append(front);
  card.append(back);
  return card;
}

function cardGenerator(n) {
  for (let i = 0; i < n; i++) {
    allCards.push(generateCard(i));
    allCards.push(generateCard(i));
  }
}

cardGenerator(6);
randomizeCards();

const play = document.querySelector('.play').addEventListener('click', () => {
  gameOverComp.style.display = 'none';
  while (cardContainer.firstChild) {
    cardContainer.removeChild(cardContainer.firstChild);
  }
  allCards = [];
  openedCards = [];
  gameOver = false;
  cardGenerator(6);
  randomizeCards();
});
