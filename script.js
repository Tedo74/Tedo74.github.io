const li = document.querySelectorAll('.exp-dates');

li.forEach((el) =>
  el.addEventListener('click', () => {
    infoToShow = el.querySelector('.experience-details');
    infoToShow.classList.toggle('show-detail');
  })
);

// const panel = document.querySelectorAll('.panel');
// panel.forEach((p) => {
//   p.addEventListener('click', () => {
//     panel.forEach((p) => p.classList.remove('active'));
//     p.classList.add('active');
//   });
// });
