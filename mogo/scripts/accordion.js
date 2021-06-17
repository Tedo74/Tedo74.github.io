const accHeader = document.querySelectorAll('.what-accordion-header');
const accItem = document.querySelectorAll('.accordion-item');
const accPhotos = document.querySelectorAll('.acc-photo');

accHeader.forEach((acc) => {
  acc.addEventListener('click', (evt) => {
    const item = evt.target.closest('.accordion-item');
    if (item.classList.contains('active')) {
      item.classList.remove('active');
    } else {
      accRemoveActive();
      const itemAttr = item.getAttribute('data-photo');
      item.classList.add('active');
      accSetImage(itemAttr);
    }
  });
});

function accRemoveActive() {
  accItem.forEach((item) => {
    item.classList.remove('active');
  });
}

function accSetImage(attr) {
  accPhotos.forEach((photo) => {
    if (photo.getAttribute('data-photo') === attr) {
      photo.classList.add('active');
    } else {
      photo.classList.remove('active');
    }
  });
}
