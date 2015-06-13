var map;
function initialize() {
  var mapOptions = {
    zoom: 8,
    center: new google.maps.LatLng(51.107897, 17.044049)
  };
  map = new google.maps.Map(
          document.getElementById('map-canvas'),
          mapOptions
        );
}

google.maps.event.addDomListener(window, 'load', initialize);

function add_marker(place){
  console.log("MAPS >> add marker: " + place.lon() + "x" + place.lat());
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng( place.lon(), place.lat()),
    map: map,
    title: "asd" //place.name()
  });

  var infowindow = new google.maps.InfoWindow({
    content: "<img src='" + place.img() + "' style='width: 50px; height: 50px;' />"
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map, marker);
  });
}
