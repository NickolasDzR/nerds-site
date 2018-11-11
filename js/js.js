
var link = document.querySelector(".login-link");
var popup = document.querySelector('.modal-unshow');
var close = document.querySelector('.modal-close');

link.addEventListener('click', function (evt) {
  evt.preventDefault();
popup.classList.add('modal-show');
});
close.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.remove('modal-show');
});

<link rel='stylesheet' href='js/js.js' type='text/js' />