ymaps.ready(init);
function init(){

    var myMap = new ymaps.Map("my-map", {

        center: [55.75846806898367,37.60108849999989],

        zoom: 14,
        controls: []// это отключает элементы управления
    },
    {
      suppressMapOpenBlock: true, // это отключает некоторые элементы внизу карты
    }
    );

var myPlacemark = new ymaps.Placemark([55.75846806898367,37.60108849999989], {}, {
  iconLayout: 'default#image',
  iconImageHref: "../img/svg/map-mark.svg",
  iconImageSize: [20, 20],
  iconImageOffset: [-3, -42]
});
myMap.geoObjects.add(myPlacemark);
}

