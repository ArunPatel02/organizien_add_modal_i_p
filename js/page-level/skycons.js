
// Sky Icons
var icons = new Skycons({
        "color": "#5d8bd0"
    })
    , list = [
        "clear-day", "clear-night", "partly-cloudy-day"
        , "partly-cloudy-night", "cloudy", "rain", "sleet", "snow", "wind"
        , "fog"
      ]
    , i;
for (i = list.length; i--;) {
    var weatherType = list[i]
        , elements = document.getElementsByClassName(weatherType);
    for (e = elements.length; e--;) {
        icons.set(elements[e], weatherType);
    }
}
icons.play();
