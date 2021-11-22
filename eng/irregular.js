const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');
inputs = [first, second, third];

inputs.forEach((i) =>
  i.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
      check();
    }
  })
);

document.getElementById('changeVerb').addEventListener('click', setVerbToInput);
document.getElementById('solution').addEventListener('click', showSolution);
document.getElementById('check').addEventListener('click', check);
const congrats = document.querySelector('.congrats');

let verb = [];
let checked = 'false';

const verbs = [
  ['be', 'was', 'been'],
  ['beat', 'became', 'become'],
  ['begin', 'began', 'begun'],
  ['bend', 'bent', 'bent'],
  ['bite', 'bit', 'bitten'],
  ['blow', 'blew', 'blown'],
  ['break', 'broke', 'broken'],
  ['bring', 'brought', 'brought'],
  ['build', 'built', 'built'],
  ['burn', 'burnt', 'burnt'],
  ['buy', 'bought', 'bought'],
  ['catch', 'caught', 'caught'],
  ['choose', 'chose', 'chose'],
  ['come', 'came', 'come'],
  ['cost', 'cost', 'cost'],
  ['cut', 'cut', 'cut'],
  ['dig', 'dug', 'dug'],
  ['do', 'did', 'done'],
  ['draw', 'drew', 'drew'],
  ['dream', 'dreamt', 'dreamt'],
  ['drink', 'drank', 'drunk'],
  ['drive', 'drove', 'driven'],
  ['eat', 'ate', 'eaten'],
  ['fall', 'fell', 'fallen'],
  ['feed', 'fed', 'fed'],
  ['feel', 'felt', 'felt'],
  ['fight', 'fought', 'fought'],
  ['find', 'found', 'found'],
  ['fly', 'flew', 'flown'],
  ['forget', 'forgot', 'forgotten'],
  ['forgive', 'forgave', 'forgiven'],
  ['freeze', 'froze', 'frozen'],
  ['get', 'got', 'got'],
];

function clearVerbs() {
  first.value = '';
  inputs.forEach((i) => {
    i.classList.remove('wrong');
    i.value = '';
  });
  checked = false;
}

function getVerb() {
  return Math.floor(Math.random() * verbs.length);
}
function getForm() {
  return Math.floor(Math.random() * verbs[0].length);
}

function setVerbToInput() {
  congrats.classList.add('hide');
  checked = false;
  clearVerbs();
  verb = verbs[getVerb()];
  const genNum = getForm();

  switch (genNum) {
    case 0: {
      first.value = verb[genNum];
      break;
    }
    case 1: {
      second.value = verb[genNum];
      break;
    }
    case 2: {
      third.value = verb[genNum];
      break;
    }
  }
}

function showSolution() {
  first.value = verb[0];
  second.value = verb[1];
  third.value = verb[2];
  checked = true;
}

function check() {
  let all = true;
  if (first.value.toLowerCase().trim() !== verb[0]) {
    first.classList.add('wrong');
    all = false;
    checked = true;
  }
  if (second.value.toLowerCase().trim() !== verb[1]) {
    second.classList.add('wrong');
    all = false;
    checked = true;
  }
  if (third.value.toLowerCase().trim() !== verb[2]) {
    third.classList.add('wrong');
    all = false;
    checked = true;
  }

  if (all && !checked) {
    congrats.classList.remove('hide');
  } else {
    congrats.classList.add('hide');
  }
}

setVerbToInput();
