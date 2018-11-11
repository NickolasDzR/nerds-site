var link = document.querySelector(".login-link");
var popup = document.querySelector('.modal-unshow');
var close = document.querySelector('.modal-close');
var text = popup.querySelector('[name=your-name]');
var form = popup.querySelector('form');
link.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('modal-show');
  text.focus();
});
close.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.remove('modal-show');
});