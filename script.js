const li = document.querySelectorAll('.exp-dates');

li.forEach((el) =>
  el.addEventListener('click', () => {
    infoToShow = el.querySelector('.experience-details');
    infoToShow.classList.toggle('show-detail');
  })
);
