// initMap() - функция инициализации карты
function initMap() {
	// Координаты 
	var centerLatLng = new google.maps.LatLng(46.474259, 30.746056);
	// Обязательные опции с которыми будет проинициализированна карта
	var mapOptions = {
		center: centerLatLng, // Координаты центра мы берем из переменной centerLatLng
		zoom: 17               // Зум по умолчанию. Возможные значения от 0 до 21
	};
	// Создаем карту внутри элемента #map
	var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
// Ждем полной загрузки страницы, после этого запускаем initMap()
google.maps.event.addDomListener(window, "load", initMap);

function initMap() {
	var centerLatLng = new google.maps.LatLng(46.474259, 30.746056);
	var mapOptions = {
		center: centerLatLng,
		zoom: 17
	};
	var map = new google.maps.Map(document.getElementById("map"), mapOptions);
	// Добавляем маркер
	var marker = new google.maps.Marker({
		position: centerLatLng,              // Координаты расположения маркера. В данном случае координаты нашего маркера совпадают с центром карты, но разумеется нам никто не мешает создать отдельную переменную и туда поместить другие координаты.
		map: map,                            // Карта на которую нужно добавить маркер
		title: "ул. Базарная 36" // (Необязательно) Текст выводимый в момент наведения на маркер
	});
}
google.maps.event.addDomListener(window, "load", initMap);
