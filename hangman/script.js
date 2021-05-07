const parts = document.querySelectorAll('.figure-part');
const guess = document.getElementsByClassName('guess')[0];
const wrong = document.querySelector('.wrong-letters');
const popup = document.querySelector('.popup-container');
const message = document.getElementById('message');
const playAgain = document.querySelector('.play');
const keyboard = document.getElementById('keyboard');
let v = document.getElementById('anim');
let v2 = document.getElementById('anim2');

playAgain.addEventListener('click', startNewGame);

const capitals = [
  'Athens',
  'Sofia',
  'Belgrade',
  'Berlin',
  'Bratislava',
  'Budapest',
  'Helsinki',
  'Lisbon',
  'Moscow',
  'Paris',
  'Reykjavik',
  'Vienna',
  'Vilnius',
];

function generateCapital() {
  let random = Math.floor(Math.random() * capitals.length);
  return random;
}

function generateNewWord() {
  word = capitals[generateCapital()];
  show = `${word[0]}${'-'.repeat(word.length - 2)}${word[word.length - 1]}`;
  workArr = word.split('');
  showArr = show.split('');
  guess.textContent = show;
}

let word = capitals[generateCapital()];
let show = `${word[0]}${'-'.repeat(word.length - 2)}${word[word.length - 1]}`;
let workArr = word.split('');
let showArr = show.split('');
guess.textContent = show;
let wrongCounter = 0;
let tempArr = workArr.slice(1, workArr.length - 1);
let remainingLetters = new Set(tempArr);

window.addEventListener('keyup', (evt) => {
  let str;
  if (wrongCounter > 6) {
    return;
  }
  if (window.innerWidth <= 1024) {
    if (keyboard.value === '') {
      return;
    }
    str = keyboard.value.toLowerCase();
    str = str[str.length - 1];
  } else {
    str = evt.key;
  }
  document.getElementById('keyboard').value = '';
  if (!remainingLetters.has(str)) {
    v.beginElement();
    setTimeout(() => {
      v2.beginElement();
    }, 1800);
    wrongCounter++;
    let span = document.createElement('span');
    span.textContent = str + ', ';
    wrong.append(span);
    let id = parts[wrongCounter - 1].getAttribute('id');
    let part = document.getElementById(id);
    part.style.opacity = 1;
    if (gameEndCheck()) {
      return;
    }
    return;
  }
  remainingLetters.delete(str);
  let index = workArr.indexOf(str);
  while (index !== -1) {
    showArr[index] = str;
    index = workArr.indexOf(str, index + 1);
  }
  show = showArr.join('');
  guess.textContent = show;
  winCheck();
});

function gameEndCheck() {
  if (wrongCounter === 6) {
    message.textContent = 'Game Over';
    popup.style.display = 'flex';
    return true;
  }
}
function winCheck() {
  if (!showArr.includes('-')) {
    message.textContent = 'You Win!';
    popup.style.display = 'flex';
  }
}

function startNewGame() {
  wrongCounter = 0;
  message.textContent = '';
  popup.style.display = 'none';
  wrong.innerHTML = '';
  parts.forEach((part) => {
    part.style.opacity = 0;
  });
  generateNewWord();
  tempArr = workArr.slice(1, workArr.length - 1);
  remainingLetters = new Set(tempArr);
  keyboard.focus();
}

window.onload = function () {
  keyboard.focus();
};
