const burger = document.querySelector('.burger-menu');
const menu = document.querySelector('.main-menu');

burger.addEventListener('click', () => {
  if (menu.classList.contains('show-main-nav')) {
    menu.classList.remove('show-main-nav');
    menu.classList.add('hidde');
    burger.classList.remove('burger-open');
  } else {
    menu.classList.add('show-main-nav');
    menu.classList.remove('hidde');
    burger.classList.add('burger-open');
  }
});
