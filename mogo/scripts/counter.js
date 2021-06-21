const counterSection = document.querySelector('.about-counter');
let counter1 = document.getElementById('counter-1');
let counter2 = document.getElementById('counter-2');
let counter3 = document.getElementById('counter-3');
let counter4 = document.getElementById('counter-4');
let counter5 = document.getElementById('counter-5');
let countTime = 200;
let executed = false;

let counterInterval;

function runCounter() {
  counterInterval = setInterval(countAll, countTime);
}

let counterValue = 0;
let counterValue2 = 0;
let counterValue3 = 0;
let counterValue4 = 0;
let counterValue5 = 0;

function countAll() {
  counterValue++;
  if (counterValue <= 123) {
    count1();
    count2();
    count3();
    count4();
    count5();
  } else {
    clearInterval(counterInterval);
  }
}

function count1() {
  if (counterValue <= 42) {
    counter1.textContent = counterValue;
  }
}

function count2() {
  if (counterValue <= 123) {
    setTimeout(() => {
      counterValue2++;
      counter2.textContent = counterValue2;
    }, 150);
  }
}
function count3() {
  if (counterValue <= 15) {
    setTimeout(() => {
      counterValue3++;
      counter3.textContent = counterValue3;
    }, 400);
  }
}

function count4() {
  if (counterValue <= 99) {
    setTimeout(() => {
      counterValue4++;
      counter4.textContent = counterValue4;
    }, 600);
  }
}
function count5() {
  if (counterValue <= 24) {
    setTimeout(() => {
      counterValue5++;
      counter5.textContent = counterValue5;
    }, 800);
  }
}

// Browser Intersection Observer API
const callBackObs = function (entries) {
  const entry = entries[0];
  if (entry.isIntersecting && !executed) {
    runCounter();
    executed = true;
  }
};
const optionsObs = {
  // target null ==> viewport
  root: null,
  // 10% intersection
  threshold: 0.4,
};
const observer = new IntersectionObserver(callBackObs, optionsObs);
observer.observe(counterSection);
