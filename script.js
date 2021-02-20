const li = document.querySelectorAll('.exp-dates');

li.forEach((el) =>
  el.addEventListener('click', () => {
    infoToShow = el.querySelector('.experience-details');
    if (infoToShow.style.display === 'none') {
      infoToShow.style.display = 'block';
    } else {
      infoToShow.style.display = 'none';
    }
  })
);
