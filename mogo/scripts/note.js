// ******************************
// OLD VERSION NOT USED!
// ******************************

const noteLeftBtn = document.getElementById('note-carousel-left-btn');
const noteRightBtn = document.getElementById('note-carousel-right-btn');
const noteText = document.querySelector('.note-carousel-text');
const noteAuthor = document.querySelector('.note-author');

const textNoteArr = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea atque recusandae ipsam',
  'Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
];

const noteAutors = ['John Doe', 'Ann Smith', 'Peter Green'];

let noteInterval = setInterval(noteRightClick, 5000);

function resetNoteInterval() {
  clearInterval(noteInterval);
  noteInterval = setInterval(noteRightClick, 5000);
}

let noteCarouselIndex = 0;
function addToNoteIndex() {
  noteCarouselIndex++;
  if (noteCarouselIndex > textNoteArr.length - 1) {
    noteCarouselIndex = 0;
  }
}
function subToNoteIndex() {
  noteCarouselIndex--;
  if (noteCarouselIndex < 0) {
    noteCarouselIndex = textNoteArr.length - 1;
  }
}
function noteLeftClick() {
  resetNoteInterval();
  subToNoteIndex();
  noteSetText();
  noteRemoveText();
  noteShowText();
}
function noteRightClick() {
  resetNoteInterval();
  addToNoteIndex();
  noteSetText();
  noteRemoveText();
  noteShowText();
}

function noteRemoveText() {
  noteText.classList.remove('show-note');
  noteAuthor.classList.remove('show-note');
}
function noteShowText() {
  setTimeout(() => {
    noteText.classList.add('show-note');
    noteAuthor.classList.add('show-note');
  }, 1000);
}
function noteSetText() {
  noteText.textContent = textNoteArr[noteCarouselIndex];
  noteAuthor.textContent = noteAutors[noteCarouselIndex];
}

function noteCarouselChangeText(index) {
  newParagraph.textContent = textNoteArr[index];
}

noteLeftBtn.addEventListener('click', noteLeftClick);
noteRightBtn.addEventListener('click', noteRightClick);
