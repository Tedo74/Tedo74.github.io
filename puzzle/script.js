class PuzzlePiece {
  constructor(orderNumber, img) {
    this.img = img;
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

    piece.style.backgroundImage = "url('img/bee2.jpg')";
    // console.log(this.img);
    piece.style.backgroundPosition = `-${this.img.x * 100}px -${
      this.img.y * 100
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
        let el = new PuzzlePiece(counter++, { x: x, y: y });
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
    this.elementToAttach.addEventListener('dragover', function (evt) {
      evt.preventDefault();
    });
    this.elementToAttach.addEventListener('dragstart', (evt) => {
      this.dragged = evt.target;
    });
    this.elementToAttach.addEventListener('drop', (evt) => {
      this.piecePassive = evt.target;
      this.swap();
      this.compare();
    });
  }
  swap() {
    if (this.gameOver) {
      return;
    }
    console.log();
    console.log();

    let el1 = this.dragged.innerText;
    let el2 = this.piecePassive.innerText;
    this.dragged.innerText = el2;
    this.piecePassive.innerText = el1;
    let passiveData = this.piecePassive.getAttribute('data-position');
    let draggedData = this.dragged.getAttribute('data-position');
    this.piecePassive.setAttribute('data-position', draggedData);
    this.dragged.setAttribute('data-position', passiveData);

    let draggedBgr = this.dragged.style.backgroundPosition;
    let passiveBgr = this.piecePassive.style.backgroundPosition;

    this.piecePassive.style.backgroundPosition = draggedBgr;
    this.dragged.style.backgroundPosition = passiveBgr;
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
  puzzle.createPieces();
  puzzle.setPieces();
  puzzle.gameOver = false;
  document.querySelector('.winner').style.opacity = '0';
});
