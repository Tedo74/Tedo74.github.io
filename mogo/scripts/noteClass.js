// note
const noteLeftBtn = document.getElementById('note-carousel-left-btn');
const noteLeftBtn2 = document.getElementById('note-carousel-left-btn2');
const noteRightBtn = document.getElementById('note-carousel-right-btn');
const noteRightBtn2 = document.getElementById('note-carousel-right-btn2');
const noteText = document.querySelector('.note-carousel-text');
const noteAuthor = document.querySelector('.note-author');

// slider
const sliderLeftBtn = document.getElementById('slider-carousel-left-btn');
const sliderLeftBtn2 = document.getElementById('slider-carousel-left-btn2');
const sliderRightBtn = document.getElementById('slider-carousel-right-btn');
const sliderRightBtn2 = document.getElementById('slider-carousel-right-btn2');
const sliderText = document.querySelector('.slider-carousel-text');
const sliderAuthor = document.querySelector('.slider-author');
const sliderPicture = document.querySelector('.slider-img img');

class Note {
  constructor(
    textNoteArr,
    noteAutors,
    leftBtnDom,
    rightBtnDom,
    leftBtnDom2,
    rightBtnDom2,
    textDom,
    authorDom,
    picDom,
    picArray
  ) {
    this.noteLeftBtn = leftBtnDom;
    this.noteRightBtn = rightBtnDom;
    this.noteLeftBtn2 = leftBtnDom2;
    this.noteRightBtn2 = rightBtnDom2;
    this.noteText = textDom;
    this.noteAuthor = authorDom;
    this.textNoteArr = textNoteArr;
    this.noteAutors = noteAutors;
    this.picArray = picArray;
    this.img = picDom;
    this.noteInterval = setInterval(() => {
      this.resetNoteInterval();
      this.noteRemoveText();
      this.addToNoteIndex();
      this.noteSetText();
      this.noteShowText();
      if (this.img) {
        this.sliderRemoveImg();
        this.sliderChangeImage();
        this.sliderShowImg();
      }
    }, 5000);
    this.noteCarouselIndex = 0;
    this.addEvents();
  }
  addEvents() {
    this.noteLeftBtn.addEventListener('click', () => {
      this.noteLeftClick();
    });
    this.noteRightBtn.addEventListener('click', () => {
      this.noteRightClick();
    });
    this.noteLeftBtn2.addEventListener('click', () => {
      this.noteRightClick();
    });
    this.noteRightBtn2.addEventListener('click', () => {
      this.noteRightClick();
    });
  }

  resetNoteInterval() {
    clearInterval(this.noteInterval);
    this.noteInterval = setInterval(() => {
      this.noteRightClick();
    }, 5000);
  }
  addToNoteIndex() {
    this.noteCarouselIndex++;
    if (this.noteCarouselIndex > this.textNoteArr.length - 1) {
      this.noteCarouselIndex = 0;
    }
  }
  subToNoteIndex() {
    this.noteCarouselIndex--;
    if (this.noteCarouselIndex < 0) {
      this.noteCarouselIndex = this.textNoteArr.length - 1;
    }
  }
  noteLeftClick() {
    this.resetNoteInterval();
    this.subToNoteIndex();
    this.noteRemoveText();
    this.noteSetText();
    this.noteShowText();
    if (this.img) {
      this.sliderRemoveImg();
      this.sliderChangeImage();
      this.sliderShowImg();
    }
  }
  noteRightClick() {
    this.noteRemoveText();
    this.resetNoteInterval();
    this.addToNoteIndex();
    this.noteSetText();
    this.noteShowText();
    if (this.img) {
      this.sliderRemoveImg();
      this.sliderChangeImage();
      this.sliderShowImg();
    }
  }
  noteRemoveText() {
    this.noteText.classList.remove('show-note');
    this.noteAuthor.classList.remove('show-note');
  }
  noteShowText() {
    setTimeout(() => {
      this.noteText.classList.add('show-note');
      this.noteAuthor.classList.add('show-note');
    }, 800);
  }
  noteSetText() {
    setTimeout(() => {
      this.noteText.textContent = this.textNoteArr[this.noteCarouselIndex];
      this.noteAuthor.textContent = this.noteAutors[this.noteCarouselIndex];
    }, 450);
  }
  noteCarouselChangeText(index) {
    this.newParagraph.textContent = this.textNoteArr[index];
  }
  sliderChangeImage() {
    setTimeout(() => {
      this.img.src = this.picArray[this.noteCarouselIndex];
    }, 500);
  }
  sliderShowImg() {
    setTimeout(() => {
      this.img.classList.add('show-img');
    }, 500);
  }
  sliderRemoveImg() {
    this.img.classList.remove('show-img');
  }
}

// note instance
const noteCarousel = new Note(
  [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea atque recusandae ipsam minim veniam, quis nostrud exercitationminim veniam, quis nostrud exercitation',
    'Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. ',
  ],
  ['John Doe', 'Ann Smith', 'Peter Green'],
  noteLeftBtn,
  noteRightBtn,
  noteLeftBtn2,
  noteRightBtn2,
  noteText,
  noteAuthor
);

// slider instance
const slider = new Note(
  [
    'Lorem Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
    'Ea atque recusandae ipsam. Lorem ipsum dolor sit amet consectetur adipisicing elit exercitation minim veniam.',
    'Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
  ],
  ['Joshua Earle', 'Michael Fertig', 'Christopher Campbell'],
  sliderLeftBtn,
  sliderRightBtn,
  sliderLeftBtn2,
  sliderRightBtn2,
  sliderText,
  sliderAuthor,
  sliderPicture,
  ['assets/slider.jpg', 'assets/slider2.jpg', 'assets/slider3.jpg']
);
