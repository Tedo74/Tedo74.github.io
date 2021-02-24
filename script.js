const li = document.querySelectorAll('.exp-dates');

li.forEach((el) =>
  el.addEventListener('click', () => {
    let infoToShow = el.querySelector('.experience-details');
    if (infoToShow.classList.contains('show-detail')) {
      li.forEach((elm) => {
        elm
          .querySelector('.experience-details')
          .classList.remove('show-detail');
      });
    } else {
      li.forEach((elm) => {
        elm
          .querySelector('.experience-details')
          .classList.remove('show-detail');
      });
      infoToShow.classList.add('show-detail');
    }
  })
);

// const panel = document.querySelectorAll('.panel');
// panel.forEach((p) => {
//   p.addEventListener('click', () => {
//     panel.forEach((p) => p.classList.remove('active'));
//     p.classList.add('active');
//   });
// });
