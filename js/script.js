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
	// Координаты центра на карте. Широта: 56.2928515, Долгота: 43.7866641
	var centerLatLng = new google.maps.LatLng(59.938631, 30.323055);
	// Обязательные опции с которыми будет проинициализированна карта
	var mapOptions = {
		center: centerLatLng, // Координаты центра мы берем из переменной centerLatLng
		zoom: 8               // Зум по умолчанию. Возможные значения от 0 до 21
	};
	// Создаем карту внутри элемента #map
	var map = new google.maps.Map(document.getElementById('container-map'), mapOptions);
}
// Ждем полной загрузки страницы, после этого запускаем initMap()
google.maps.event.addDomListener(window, "load", initMap);