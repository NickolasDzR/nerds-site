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
/*
59.938631, 30.323055
img/map-marker.png
container-map
*/

function initMap() {
	var centerLatLng = new google.maps.LatLng(59.938631, 30.323055);
	var mapOptions = {
		center: centerLatLng,
		zoom: 15
	};
	var map = new google.maps.Map(document.getElementById('map'), mapOptions);
}
google.maps.event.addDomListener(window, "load", initMap);