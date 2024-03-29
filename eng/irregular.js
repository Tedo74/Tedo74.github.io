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
const message = document.querySelector('.message');

let verb = [];
let checked = 'false';

const verbs = [
  ['be', 'was', 'been'],
  ['beat', 'beat', 'beaten'],
  ['become', 'became', 'become'],
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
  ['choose', 'chose', 'chosen'],
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
  ['give', 'gave', 'given'],
  ['go', 'went', 'gone'],
  ['grow', 'grew', 'grown'],
  ['hang', 'hung', 'hung'],
  ['have', 'had', 'had'],
  ['hear', 'heard', 'heard'],
  ['hide', 'hid', 'hidden'],
  ['hit', 'hit', 'hit'],
  ['hold', 'held', 'held'],
  ['hurt', 'hurt', 'hurt'],
  ['keep', 'kept', 'kept'],
  ['know', 'knew', 'known'],
  ['lay', 'laid', 'laid'],
  ['lead', 'led', 'led'],
  ['learn', 'learnt', 'learnt'],
  ['leave', 'left', 'left'],
  ['lend', 'lent', 'lent'],
  ['let', 'let', 'let'],
  ['lie', 'lay', 'lain'],
  ['light', 'lit', 'lit'],
  ['lose', 'lost', 'lost'],
  ['make', 'made', 'made'],
  ['mean', 'meant', 'meant'],
  ['meet', 'met', 'met'],
  ['pay', 'paid', 'paid'],
  ['read', 'read', 'read'],
  ['ride', 'rode', 'ridden'],
  ['ring', 'rang', 'rung'],
  ['rise', 'rose', 'risen'],
  ['run', 'ran', 'run'],
  ['say', 'said', 'said'],
  ['see', 'saw', 'seen'],
  ['seek', 'sought', 'sought'],
  ['sell', 'sold', 'sold'],
  ['send', 'sent', 'sent'],
  ['set', 'set', 'set'],
  ['shake', 'shook', 'shaken'],
  ['shine', 'shone', 'shone'],
  ['shoot', 'shot', 'shot'],
  ['shut', 'shut', 'shut'],
  ['sing', 'sang', 'sung'],
  ['sink', 'sank', 'sunk'],
  ['sit', 'sat', 'sat'],
  ['sleep', 'slept', 'slept'],
  ['smell', 'smelt', 'smelt'],
  ['speak', 'spoke', 'spoken'],
  ['spell', 'spelt', 'spelt'],
  ['spend', 'spent', 'spent'],
  ['spill', 'spilt', 'spilt'],
  ['stand', 'stood', 'stood'],
  ['steal', 'stole', 'stolen'],
  ['strike', 'struck', 'strack'],
  ['swim', 'swam', 'swum'],
  ['take', 'took', 'taken'],
  ['teach', 'taught', 'taught'],
  ['tell', 'told', 'told'],
  ['think', 'thought', 'thought'],
  ['throw', 'threw', 'thrown'],
  ['understand', 'understood', 'understood'],
  ['wake', 'woke', 'woken'],
  ['wear', 'wore', 'worn'],
  ['winn', 'won', 'won'],
  ['writte', 'wrote', 'written'],
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
  message.classList.add('hide');
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
    message.classList.remove('hide');
    setTimeout(() => {
      message.classList.add('hide');
      setVerbToInput();
    }, 1000);
  } else {
    message.classList.add('hide');
  }
}

setVerbToInput();
