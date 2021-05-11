class PuzzlePiece {
  constructor(orderNumber, imgSrc, imgData) {
    this.imgData = imgData;
    this.imgSrc = imgSrc;
    this.orderNumber = orderNumber;
    this.element = this.createElement();
    this.getElement();
  }
  createElement() {
    let piece = document.createElement('div');
    piece.setAttribute('draggable', true);
    // piece.textContent = this.orderNumber + 1;
    piece.classList.add('puzzle-piece');
    piece.setAttribute('data-position', this.orderNumber);
    // console.log(this.img);
    piece.style.backgroundImage = `url("${this.imgSrc}")`;
    piece.style.backgroundPosition = `-${this.imgData.x * 100}px -${
      this.imgData.y * 100
    }px`;
    // piece.style.backgroundPosition = 'top left';
    return piece;
  }
  getElement() {
    return this.element;
  }
}

class Puzzle {
  constructor(domElementId, col, row) {
    this.imagesArr = [
      'img/bee2.jpg',
      'img/parrot.jpg',
      'img/nature.jpg',
      'img/tree.jpg',
    ];
    this.img = this.selectImageSrc();
    this.touches = [];
    this.col = col;
    this.row = row;
    this.piecesCount = col * row;
    this.elementToAttach = document.getElementById(domElementId);
    this.elementToAttach.classList.add('puzzle-container');
    this.arrPuzzles = [];
    this.dragged = null;
    this.piecePassive = null;
    this.createPieces();
    this.setPieces();
    this.setPuzzleDragEvents();
    this.gameOver = false;
  }

  selectImageSrc() {
    let src = `${
      this.imagesArr[Math.floor(Math.random() * this.imagesArr.length)]
    }`;
    return src;
  }

  randomize() {
    this.arrPuzzles.sort((a, b) => Math.random() - Math.random());
  }

  createPieces() {
    // for (let i = 0; i < this.piecesCount; i++) {
    //   this.arrPuzzles.push(new PuzzlePiece(i).element);
    // }
    let counter = 0;
    for (let y = 0; y < this.row; y++) {
      for (let x = 0; x < this.col; x++) {
        let el = new PuzzlePiece(counter++, this.img, { x: x, y: y });
        this.arrPuzzles.push(el.element);
      }
    }
  }

  setPieces() {
    this.randomize();
    this.arrPuzzles.forEach((piece, index) => {
      piece.setAttribute('data-temp-order', index);
      this.elementToAttach.append(piece);
    });
  }

  setPuzzleDragEvents() {
    this.elementToAttach.addEventListener(
      'touchstart',
      (evt) => {
        if (this.gameOver) {
          return;
        }
        if (this.touches.length === 0) {
          this.touches.push(evt.target);
          evt.target.style.border = '1px solid gainsboro';
          evt.target.innerText = '1';
        } else if (
          this.touches.length === 1 &&
          evt.target !== this.touches[0]
        ) {
          this.touches.push(evt.target);
          evt.target.innerText = '2';
          evt.target.style.border = '1px solid gainsboro';
          setTimeout(() => {
            this.touches[0].innerText = '';
            this.touches[1].innerText = '';
            this.touches[0].style.border = 'none';
            this.touches[1].style.border = 'none';
            this.swap(this.touches[0], this.touches[1]);
            this.compare();
          }, 400);
        } else if (this.touches.length > 1) {
          this.touches = [];
          this.touches.push(evt.target);
          evt.target.style.border = '1px solid gainsboro';
          evt.target.innerText = '1';
        }
      },
      { passive: true }
    );

    this.elementToAttach.addEventListener('dragover', function (evt) {
      evt.preventDefault();
    });
    this.elementToAttach.addEventListener('dragstart', (evt) => {
      this.dragged = evt.target;
    });
    this.elementToAttach.addEventListener('drop', (evt) => {
      this.piecePassive = evt.target;
      this.swap(this.dragged, this.piecePassive);
      this.compare();
    });
  }
  swap(element1, element2) {
    if (this.gameOver) {
      return;
    }

    let el1 = element1.innerText;
    let el2 = element2.innerText;
    element1.innerText = el2;
    element2.innerText = el1;
    let passiveData = element2.getAttribute('data-position');
    let draggedData = element1.getAttribute('data-position');
    element2.setAttribute('data-position', draggedData);
    element1.setAttribute('data-position', passiveData);

    let draggedBgr = element1.style.backgroundPosition;
    let passiveBgr = element2.style.backgroundPosition;

    element2.style.backgroundPosition = draggedBgr;
    element1.style.backgroundPosition = passiveBgr;
  }

  compare() {
    let isAllComplete = true;
    for (let i = 0; i < this.arrPuzzles.length; i++) {
      let attr1 = this.arrPuzzles[i].getAttribute('data-position');
      let attr2 = this.arrPuzzles[i].getAttribute('data-temp-order');

      if (attr1 !== attr2) {
        isAllComplete = false;
        return;
      }
    }
    if (isAllComplete) {
      this.gameOver = true;
      document.querySelector('.winner').style.opacity = '1';
    }
  }
}

let puzzle = new Puzzle('puzzle', 3, 3);
const play = document.querySelector('.play').addEventListener('click', () => {
  while (puzzle.elementToAttach.firstChild) {
    puzzle.elementToAttach.removeChild(puzzle.elementToAttach.firstChild);
  }
  puzzle.arrPuzzles = [];
  puzzle.img = puzzle.selectImageSrc();
  puzzle.createPieces();
  puzzle.setPieces();
  puzzle.gameOver = false;
  document.querySelector('.winner').style.opacity = '0';
});
